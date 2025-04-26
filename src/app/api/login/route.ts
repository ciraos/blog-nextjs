import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    const a = await fetch('https://api.ciraos.top/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })

    const data = await a.json();

    //! BFF
    const res = NextResponse.json({ success: true },);
    res.cookies.set('token', data.token, { path: '/', httpOnly: true, maxAge: 86400 })
    return res;
}
