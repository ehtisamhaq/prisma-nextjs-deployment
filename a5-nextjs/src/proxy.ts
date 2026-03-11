import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/", "/public", "/login"];
const privatePaths = ["/private"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ======================= VERIFY SESSION =======================

  // ======================= CHECK PATHS & GIVE PERMISSIONS =======================

  const isPrivatePath = privatePaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/"),
  );

  if (isPrivatePath) {
    const token =
      request.cookies.get("__Secure-session_token") ||
      request.cookies.get("session_token");

    if (!token) {
      console.log("No token found. Redirecting...");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
