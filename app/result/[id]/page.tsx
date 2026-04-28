"use client"

import { use, useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { COMMANDS } from "@/lib/commands";

type SeoResult = {
  id: string;
  command: string;
  url: string;
  markdown: string;
};

// --- スコアバー ---
function ScoreBar({ score, label }: { score: number; label: string }) {
  const color =
    score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-medium">{score}/100</span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${score}%` }}
          role="progressbar"
          aria-valuenow={score}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${score}点`}
        />
      </div>
    </div>
  );
}

function extractScore(markdown: string): number | null {
  const match = markdown.match(/(\d{1,3})\s*\/\s*100/);
  return match ? parseInt(match[1], 10) : null;
}

// =============================================
// テーブルテキストをパースしてカード形式で表示する
// =============================================

type ParsedTable = {
  headers: string[];
  rows: string[][];
};

// | で区切られたテーブルテキストからヘッダーと行データを抽出する
function parseTableText(text: string): ParsedTable | null {
  // セパレータ（|---|---|）を見つける
  const sepMatch = text.match(/((?:\|[\s:-]+)+\|)/);
  if (!sepMatch) return null;

  const sep = sepMatch[1];
  const colCount = (sep.match(/-+/g) || []).length;
  if (colCount <= 0) return null;

  const pipesPerRow = colCount + 1;

  // 全 | の位置を取得
  const pipes: number[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "|") pipes.push(i);
  }

  if (pipes.length < pipesPerRow) return null;

  // pipesPerRow ごとに行を切り出す
  const rawRows: string[] = [];
  for (let i = 0; i + pipesPerRow - 1 < pipes.length; i += pipesPerRow) {
    const start = pipes[i];
    const end = pipes[i + pipesPerRow - 1] + 1;
    rawRows.push(text.substring(start, end));
  }

  // 各行をセルに分割
  const parseRow = (row: string): string[] =>
    row.split("|").slice(1, -1).map((c) => c.trim());

  // セパレータ行を除外してヘッダーとデータに分ける
  const isSep = (row: string) => /^[\s|:-]+$/.test(row) && row.includes("-");
  const dataRows = rawRows.filter((r) => !isSep(r));

  if (dataRows.length < 2) return null;

  return {
    headers: parseRow(dataRows[0]),
    rows: dataRows.slice(1).map(parseRow),
  };
}

// テーブルカードコンポーネント
function TableCards({ table }: { table: ParsedTable }) {
  return (
    <div className="grid gap-3 my-4">
      {table.rows.map((row, i) => (
        <div key={i} className="rounded-lg border p-4 space-y-2">
          {row.map((cell, j) => (
            <div key={j} className="flex gap-2">
              <span className="text-xs text-muted-foreground font-medium min-w-[100px] shrink-0">
                {table.headers[j] || ""}
              </span>
              <span className="text-sm">{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Markdown をテーブル部分と非テーブル部分に分割して描画する
function SeoMarkdown({ markdown }: { markdown: string }) {
  // テーブルブロックを検出して分割する
  // テーブル = セパレータ（|---|）を含む | 区切りの連続テキスト
  const parts: { type: "md" | "table"; content: string }[] = [];

  // まずセパレータの位置を全て見つける
  const sepRegex = /((?:\|[\s:-]+)+\|)/g;
  let sepMatch;
  const sepPositions: { start: number; end: number; colCount: number }[] = [];

  while ((sepMatch = sepRegex.exec(markdown)) !== null) {
    const colCount = (sepMatch[1].match(/-+/g) || []).length;
    if (colCount > 0) {
      sepPositions.push({
        start: sepMatch.index,
        end: sepMatch.index + sepMatch[0].length,
        colCount,
      });
    }
  }

  if (sepPositions.length === 0) {
    // テーブルなし → 全体をMarkdownとして描画
    return <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{markdown}</ReactMarkdown>;
  }

  let lastIndex = 0;

  for (const sep of sepPositions) {
    const pipesPerRow = sep.colCount + 1;

    // セパレータより前を遡ってテーブル開始位置を見つける（ヘッダー行）
    let tableStart = sep.start;
    for (let i = sep.start - 1; i >= lastIndex; i--) {
      if (markdown[i] === "\n" && (i === 0 || markdown[i - 1] === "\n")) break;
      if (markdown[i] === "|" || markdown[i] === " " || markdown[i] === "\n") {
        if (markdown[i] === "|") tableStart = i;
        // 行頭まで遡る
        let lineStart = i;
        while (lineStart > lastIndex && markdown[lineStart - 1] !== "\n") lineStart--;
        if (markdown.substring(lineStart, i + 1).includes("|")) {
          tableStart = lineStart;
        }
      }
    }

    // セパレータより後のテーブルデータ終端を見つける
    // | を含むテキストが続く限りテーブルの一部とみなす
    let tableEnd = sep.end;
    let pos = sep.end;
    while (pos < markdown.length) {
      if (markdown[pos] === "\n") {
        // 空行（\n\n）が来たらテーブル終了
        if (pos + 1 < markdown.length && markdown[pos + 1] === "\n") break;
        // 次の行に | がなければテーブル終了
        let nextLineEnd = markdown.indexOf("\n", pos + 1);
        if (nextLineEnd === -1) nextLineEnd = markdown.length;
        const nextLine = markdown.substring(pos + 1, nextLineEnd);
        if (!nextLine.includes("|")) break;
        tableEnd = nextLineEnd;
        pos = nextLineEnd;
      } else {
        tableEnd = pos + 1;
        pos++;
      }
    }

    // テーブル前のテキスト
    if (tableStart > lastIndex) {
      const before = markdown.substring(lastIndex, tableStart).trim();
      if (before) parts.push({ type: "md", content: before });
    }

    // テーブルブロック
    parts.push({ type: "table", content: markdown.substring(tableStart, tableEnd) });
    lastIndex = tableEnd;
  }

  // 残りのテキスト
  if (lastIndex < markdown.length) {
    const remaining = markdown.substring(lastIndex).trim();
    if (remaining) parts.push({ type: "md", content: remaining });
  }

  return (
    <>
      {parts.map((part, i) => {
        if (part.type === "table") {
          const parsed = parseTableText(part.content);
          if (parsed) return <TableCards key={i} table={parsed} />;
        }
        return (
          <ReactMarkdown key={i} rehypePlugins={[rehypeSanitize]}>
            {part.content}
          </ReactMarkdown>
        );
      })}
    </>
  );
}

// --- 結果ページ本体 ---
export default function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [result, setResult] = useState<SeoResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(`seo-result-${id}`);
    if (stored) {
      setResult(JSON.parse(stored));
    } else {
      setError("結果が見つかりません。");
    }
  }, [id]);

  if (error) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <p className="text-destructive mb-4">{error}</p>
        <Link href="/">
          <Button>トップページに戻る</Button>
        </Link>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <p className="text-muted-foreground">読み込み中...</p>
      </div>
    );
  }

  const commandInfo = COMMANDS.find((c) => c.id === result.command);
  const Icon = commandInfo?.icon;
  const score = extractScore(result.markdown);

  const handleDownload = () => {
    const blob = new Blob([result.markdown], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `seo-report-${result.command}.md`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="flex flex-1 flex-col items-center px-4 py-8">
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">← 新しい分析</Button>
          </Link>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            📥 MDダウンロード
          </Button>
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            {Icon && <Icon className="w-6 h-6" />} {commandInfo?.name}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{result.url}</p>
        </div>

        {score !== null && (
          <Card className="p-6 space-y-4">
            <h2 className="font-semibold">スコア</h2>
            <ScoreBar score={score} label="総合" />
          </Card>
        )}

        <Card className="p-6">
          <article className="prose prose-sm max-w-none">
            <SeoMarkdown markdown={result.markdown} />
          </article>
        </Card>
      </div>
    </div>
  );
}
