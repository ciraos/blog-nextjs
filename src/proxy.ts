import { NextRequest, NextResponse } from "next/server";

export default function proxy(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    //! 场景1
    if (!token && req.nextUrl.pathname !== '/login') {
        // return NextResponse.redirect(new URL('/login', req.url));
    }

    //! 场景2
    if (token && req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }
}
