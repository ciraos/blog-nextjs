import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    //! 调用后端接口
    const a = await fetch('https://api.ciraos.top/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    const data = await a.json();

    //! BFF

    const res = NextResponse.json(
        { success: true, msg: data.message },
        // { headers: { 'Set-Cookie': `token=${data.data.token}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=86400` } }
    );

    res.cookies.set('token', data.token, { path: '/', maxAge: 86400, httpOnly: true })
    return res;

    // return NextResponse.json({ data })
}
