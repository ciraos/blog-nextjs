import { NextResponse } from "next/server";

export async function GET() {
    const e = await fetch('https://api.ciraos.top/api/links', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    await e.json();

    const res = NextResponse.json({ success: true });
    return res;
}
