import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({
    req: request,
    res: response,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(request.nextUrl.origin);
  }

  return response;
};
