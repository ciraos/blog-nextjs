import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    //! 调用后端接口
    const a = await fetch("https://api.ciraos.top/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    const data = await a.json();

    //! 把拿到的 token 通过 cookie 的方式种植到前端

    const res = NextResponse.json(
        { success: true },
        // { headers: { "Set-Cookie": `token=${data.data.token}; Path=/; Max-Age=86400; HttpOnly` } }
    );

    res.cookies.set("token", data.data.token, { path: '/', maxAge: 86400, httpOnly: true });
    return res;
}
