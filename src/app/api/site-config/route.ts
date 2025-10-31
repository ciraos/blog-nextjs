import { NextResponse } from "next/server";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function GET() {
    const g = await fetch(`${baseUrl}/public/site-config`, {
        "method": "GET",
    })

    const data = await g.json();
    console.log(data);

    const res = NextResponse.json(data);
    return res;
}
