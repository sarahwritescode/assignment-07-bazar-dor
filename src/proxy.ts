import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      const signInUrl = new URL("/signin", request.url);

      signInUrl.searchParams.set(
        "callbackUrl",
        request.nextUrl.pathname + request.nextUrl.search
      );

      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Authentication proxy error:", error);

    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/product/:path*", "/profile/:path*"],
};