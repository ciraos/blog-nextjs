import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, link, avatar, descr } = await req.json();

    const c = await fetch('https://api.ciraos.top/api/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ name, link, avatar, descr })
    })

    await c.json();

    const res = NextResponse.json({
        success: true
    });
    return res;
}
