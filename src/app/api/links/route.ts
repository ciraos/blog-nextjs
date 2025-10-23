import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// 验证环境变量是否存在
if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL 环境变量未定义！");
}

export async function GET() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时

        const response = await fetch(`${baseUrl}/public/links`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            return NextResponse.json(
                { error: "获取友链失败！" },
                { status: response.status }
            );
        }

        const data = await response.json();
        // 移除可能的敏感信息日志输出
        // console.log(data);

        return NextResponse.json(data);
    } catch (error: unknown) {
        // 处理网络错误、解析错误等异常情况
        if (error instanceof Error && error.name === 'AbortError') {
            return NextResponse.json(
                { error: "请求超时！" },
                { status: 408 }
            );
        }

        return NextResponse.json(
            { error: "服务器内部错误！" },
            { status: 500 }
        );
    }
}
