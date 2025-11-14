import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
    try {
        const { email, password, repeat_password } = await req.json();

        if (!email || !password || !repeat_password) {
            return NextResponse.json(
                { success: false, message: "邮箱、密码和重复密码不能为空" },
                { status: 400 }
            );
        }

        if (!baseUrl) {
            return NextResponse.json(
                { success: false, message: ".env文件中网址配置错误" },
                { status: 500 }
            );
        }

        const reg = await fetch(`${baseUrl}/auth/register`, {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify({ email, password, repeat_password })
        })
        const data = await reg.json();
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "服务器错误" },
            { status: 500 }
        );
    }
}
