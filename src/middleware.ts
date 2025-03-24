import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const isLoggedIn = checkUserIsLLoggedIn(req);
    const path = req.nextUrl.pathname;
    if (!isLoggedIn && path !== '/login') {
        // return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
}

function checkUserIsLLoggedIn(req: NextRequest): boolean {
    const token = req.cookies.get('token')?.value;
    return !!token;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
        '/admin/:path*',
    ],
}
