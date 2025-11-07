import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.apiKey;

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const h = await fetch(`${baseUrl}/user/info`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await h.json();

    const res = NextResponse.json(data);
    return res;
}
