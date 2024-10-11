import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const authToken = session.data.session?.access_token;

  const restrictedPaths = ["/login"];
  if (restrictedPaths.includes(pathname) && authToken) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return NextResponse.next();
};
