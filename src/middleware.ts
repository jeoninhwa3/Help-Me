import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  const userId = userData.user?.id;

  // 로그인 시 접근할 수 없는 페이지
  const restrictedPaths = ["/login"];
  if (restrictedPaths.includes(pathname) && user) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // 비로그인 시 접근할 수 없는 페이지
  const protectedPaths = ["/mydiet"];
  if (protectedPaths.includes(pathname) && !user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  if (userId) {
    const { data: surveyData } = await supabase
      .from("users")
      .select("is_survey_done")
      .eq("user_id", userId)
      .single();

    const surveyCompleted = surveyData?.is_survey_done;

    // 설문조사 완료 시 접근할 수 없는 페이지
    const confidentialPaths = ["/survey-guide", "/survey"];
    if (surveyCompleted && confidentialPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }

    // 설문조사 미완료 시 접근할 수 없는 페이지
    const authRequiredPaths = ["/mypage", "/mydiet"];
    if (!surveyCompleted && authRequiredPaths.includes(pathname)) {
      return NextResponse.redirect(
        new URL("/survey-guide", req.nextUrl.origin)
      );
    }
  }

  return NextResponse.next();
};
