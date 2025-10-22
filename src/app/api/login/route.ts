import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const a = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await a.json();
    console.log(data);

    const res = NextResponse.json(
        { success: true }
    );

    res.cookies.set("token", data.data.accessToken, { path: "/", maxAge: 84600, httpOnly: true });
    return res;
}
