import { NextResponse } from "next/server";

export async function DELETE() {
    const res = NextResponse.json({
        success: true,
        msg: "退出成功！"
    });

    res.cookies.set('token', '', { maxAge: 0 })
    return res;
}
