import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    const c = await fetch(`${baseUrl}/public/articles`, {
        method: "GET"
    });

    const data = await c.json();
    // console.log(data);

    const res = NextResponse.json({
        success: true,
        data
    });

    return res;
}
