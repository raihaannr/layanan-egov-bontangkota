import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const isAuthenticated = !!token;
  const isAdmin = token?.role === "admin";
  const isPLCC = req.nextUrl.pathname.startsWith("/command-center/pengajuan-layanan");
  const isAdminPath = req.nextUrl.pathname.startsWith("/dashboard-admin");

  if (isPLCC && !isAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  if (isAdminPath && (!isAuthenticated || !isAdmin)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Allow the request to proceed if none of the above conditions were met
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/command-center/pengajuan-layanan/:path*",
    "/dashboard-admin/:path*"
  ], // Paths to apply middleware
};
