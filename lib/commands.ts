import {
  ShieldCheck,
  FileSearch,
  Settings,
  PenLine,
  Tags,
  Map,
  Image,
  Bot,
  MapPin,
  ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Command = {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    model: "haiku" | "sonnet" | "opus";
};

export const COMMANDS: Command[] = [
    {
        id: "audit",
        name: "フルサイト監査",
        description: "サイト全体のSEOヘルスチェック",
        icon: ShieldCheck,
        model: "sonnet",
    },
    {
        id: "page",
        name: "ページ分析",
        description: "1ページの詳細SEO分析",
        icon: FileSearch,
        model: "sonnet",
    },
    {
    id: "technical",
    name: "技術SEO",
    description: "クロール・インデックス・セキュリティ",
    icon: Settings,
    model: "haiku",
  },
  {
    id: "content",
    name: "コンテンツ品質",
    description: "E-E-A-T・読みやすさ・AI引用",
    icon: PenLine,
    model: "sonnet",
  },
  {
    id: "schema",
    name: "Schema.org",
    description: "構造化データの検出・検証・生成",
    icon: Tags,
    model: "haiku",
  },
  {
    id: "sitemap",
    name: "サイトマップ",
    description: "XMLサイトマップの分析",
    icon: Map,
    model: "haiku",
  },
  {
    id: "images",
    name: "画像最適化",
    description: "alt属性・サイズ・フォーマット",
    icon: Image,
    model: "haiku",
  },
  {
    id: "geo",
    name: "AI検索最適化",
    description: "AI Overviews・ChatGPT・Perplexity",
    icon: Bot,
    model: "sonnet",
  },
  {
    id: "local",
    name: "ローカルSEO",
    description: "GBP・NAP・レビュー・地域検索",
    icon: MapPin,
    model: "sonnet",
  },
  {
    id: "plan",
    name: "SEO戦略",
    description: "業種別のSEO戦略立案",
    icon: ClipboardList,
    model: "sonnet",
  },
]