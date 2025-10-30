import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function POST(req: NextRequest) {
    try {
        // 输入验证
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "邮箱和密码不能为空" },
                { status: 400 }
            );
        }

        // 环境变量检查
        if (!API_BASE_URL) {
            return NextResponse.json(
                { success: false, message: "服务器配置错误" },
                { status: 500 }
            );
        }

        const a = await fetch(`${API_BASE_URL}/auth/login`, {
            "method": "POST",
            'headers': { "Content-Type": "application/json" },
            "body": JSON.stringify({ email, password }),
        });

        const data = await a.json();

        // API调用失败处理
        if (!a.ok) {
            return NextResponse.json(
                { success: false, message: data.message || "登录失败" },
                { status: a.status }
            );
        }

        // 验证返回数据结构
        if (!data.data || !data.data.accessToken) {
            return NextResponse.json(
                { success: false, message: "登录响应格式错误" },
                { status: 500 }
            );
        }

        const res = NextResponse.json(
            { success: true }
        );

        res.cookies.set("token", data.data.accessToken, {
            path: "/",
            maxAge: 86400,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        console.log(API_BASE_URL + '/api/auth/login');
        return res;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "服务器内部错误" },
            { status: 500 }
        );
    }
}
