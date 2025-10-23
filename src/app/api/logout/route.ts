import { NextResponse } from "next/server";

export function DELETE() {
    const res = NextResponse.json(
        {
            success: true,
            msg: "登出成功"
        },
        { status: 200 }
    );

    res.cookies.set("token", "", {
        maxAge: 0,
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    });
    return res;
}
