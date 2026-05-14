"use client";
import {
  Command,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { COMMANDS } from "@/lib/commands";

export default function Home() {
  const [url, setUrl] = useState("");     // 入力されたURL
  const [error, setError] = useState(""); // エラーメッセージ
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState("page");

  const router = useRouter();

  const isValidUrl = (input: string) : boolean => {
    try {
      // URLの分析
      const parsed = new URL(input.startsWith("http") ? input : `https://${input}`);
      // 有効なURLかどうか判定
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  };

  // 分析開始ボタンが押された時の処理
  const handleSubmit = async () => {
    // バリデーション
    if(!url.trim()) {
      setError("URLを入力してください");
      return;
    }
    if(!isValidUrl(url)) {
      setError("正しいURLを入力してください")
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // TODO: バックエンド実装後に実際のAPI呼び出しに置き換える
      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      const res = await fetch("/api/seo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({command: selectedCommand, url:fullUrl})
      });

      if(!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Unknown error");
      }

      const data = await res.json();
      localStorage.setItem(`seo-result-${data.id}`, JSON.stringify(data));

      router.push(`/result/${data.id}`);
    } catch {
      setError("分析の開始に失敗しました。もう一度お試しください。");
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      {/* ヘッダー */}
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-bold tracking-tight flex items-center justify-center gap-2">
            SEO 分析
            <Search className="w-12 h-12" />
          </h1>
          <p className="text-muted-foreground mt-4">URLを入力して、分析の種類を選んでください</p>
        </div>

        <div className="space-y-8">
        <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError(""); // 入力が変わったらエラーをクリア
              }}
              onKeyDown={(e) => {
                // Enterキーで分析開始
                if (e.key === "Enter") handleSubmit();
              }}
              className="h-12 text-base"
              aria-label="分析するサイトのURL"
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {COMMANDS.map((cmd) => (
              <Card
                key={cmd.id}
                role="button"
                tabIndex={0}
                aria-pressed={selectedCommand === cmd.id}
                onClick={() => setSelectedCommand(cmd.id)}
                className={`cursor-pointer p-3 text-center transition-all hover:border-primary ${selectedCommand === cmd.id ? "border-primary bg-primary/5 ring-1" : ""}`}
              >
                <div className="text-2xl flex items-center justify-center">{<cmd.icon className="w-5 h-5"/>}</div>
                <div className="mt-1 text-xs text-center font-medium">{cmd.name}</div>
              </Card>
            ))};
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {COMMANDS.find((c) => c.id === selectedCommand)?.description}
        </p>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full h-12 text-base"
          size="lg"
        >
          {isLoading ? "分析中..." : (
            <>
              <Search className="w-4 h-4" />
              分析を開始する
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
