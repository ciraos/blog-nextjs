import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    const g = await fetch(`${baseUrl}/public/site-config`, {
        "method": "GET",
    })

    const data = await g.json();
    // console.log(data);

    const res = NextResponse.json(data);
    return res;
}
