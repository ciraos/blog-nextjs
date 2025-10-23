import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { success: false, message: "未授权访问" },
                { status: 401 }
            );
        }

        const response = await fetch(`${baseUrl}/user/info`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "获取用户信息失败" },
                { status: response.status }
            );
        }

        const data = await response.json();
        console.log(data);

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("获取用户信息时发生错误:", error);
        return NextResponse.json(
            { success: false, message: "服务器内部错误" },
            { status: 500 }
        );
    }
}
