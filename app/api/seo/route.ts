import { NextRequest, NextResponse } from "next/server";
import {
    BedrockAgentCoreClient,
    InvokeAgentRuntimeCommand,
  } from "@aws-sdk/client-bedrock-agentcore";

const VALID_COMMANDS = [
    "audit", "page", "technical", "content", "schema",
    "sitemap", "images", "geo", "local", "plan"
];

const AGENT_RUNTIME_ARN = process.env.AGENT_RUNTIME_ARN!;

const client = new BedrockAgentCoreClient({
    region: "ap-northeast-1",
});

export async function POST(request:NextRequest) {
    try {
        const body = await request.json();
        const { command, url } = body;

        // コマンドが不正の場合
        if(!command || !VALID_COMMANDS.includes(command)) {
            return NextResponse.json(
                {error: `コマンドが不正です${VALID_COMMANDS.join(", ")}`},
                {status: 400}
            );
        }

        // URLが不正の場合
        if(!url || (!url.startsWith("http://") && !url.startsWith("https://"))) {
            return NextResponse.json(
                {error: "有効なURLを指定してください"},
                {status: 400}
            );
        }

        // AgentCore用のペイロードを作成
        const prompt = `${command} ${url}`;
        const payload = JSON.stringify({ prompt });

        // AgentCore Runtimeを呼び出す
        const invokeCommand = new InvokeAgentRuntimeCommand({
            agentRuntimeArn: AGENT_RUNTIME_ARN,
            payload: new TextEncoder().encode(payload),
            contentType: "application/json",
        });

        const response = await client.send(invokeCommand);

        // レスポンスを文字列として取得
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const resultText = await (response.response as any).transformToString();

        // JSONパースを試みる
        let markdown = resultText;
        try {
            const parsed = JSON.parse(resultText);
            markdown = parsed.result || parsed.output || resultText;
        } catch {
            // テキストのまま使う
        }

        // 結果IDを生成
        const { createHash } = await import("crypto");
        const id = createHash("sha256")
            .update(`${command}:${url}`)
            .digest("hex")
            .slice(0, 12);

        return NextResponse.json({ id, command, url, markdown });

    } catch(error){
        console.error("Error:", error);
        return NextResponse.json(
            {error: "内部サーバーエラーが発生しました。"},
            {status: 500}
        );
    }
}