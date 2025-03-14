import { NextResponse } from "next/server";

export function DELETE() {
    const res = NextResponse.json({
        success: true,
        message: "退出成功！"
    });

    res.cookies.set('token', '', { path: '/', maxAge: 0 });
    return res;
}
