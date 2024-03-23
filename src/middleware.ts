import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const name = cookieStore.get("userName")?.value;
  const pass = cookieStore.get("password")?.value;

  if (name !== "Karen" || pass !== "Karen1234.") {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: "/confirmations",
};
