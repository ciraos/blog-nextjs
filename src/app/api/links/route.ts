import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    try {
        if (!baseUrl) {
            throw new Error("NEXT_PUBLIC_API_URL 环境变量未定义！");
        }

        const d = await fetch(`${baseUrl}/public/links?category_id=9&pageSize=20`, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json"
            },
            next: { revalidate: 86400 }
        });

        if (!d.ok) {
            return NextResponse.json(
                { error: "获取友链失败！" },
                { status: d.status }
            );
        }

        const data = await d.json();
        console.log(data);
        // console.log(baseUrl + "/public/links?category_id=5");

        return NextResponse.json(data);
    } catch (error) {
        // 打印错误详情（开发环境调试用）
        console.error("API 请求错误:", error);

        if (error instanceof Error && error.name === 'AbortError') {
            return NextResponse.json({ error: "请求超时！" }, { status: 408 });
        }
        // 区分环境返回错误信息（生产环境隐藏详情）
        const errorMsg = process.env.NODE_ENV === 'development'
            ? (error instanceof Error ? error.message : "未知错误")
            : "服务器内部错误！";
        return NextResponse.json({ error: errorMsg }, { status: 500 });
    }
}
