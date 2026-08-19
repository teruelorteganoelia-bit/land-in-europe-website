import { NextRequest, NextResponse } from "next/server";
import { verifyClientToken, verifyAdminToken } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/client/dashboard")) {
    const token = req.cookies.get("client_session")?.value;
    if (!token || !(await verifyClientToken(token))) {
      return NextResponse.redirect(new URL("/client/login", req.url));
    }
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = req.cookies.get("admin_session")?.value;
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/client/dashboard/:path*", "/admin/:path*"],
};
