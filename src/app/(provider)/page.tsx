"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const supabase = createClient();
  const router = useRouter();

  const handleLogoutSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("로그아웃 에러:", error);
    } else {
      console.log("로그아웃 성공");
      router.push("/login");
    }
  };

  return (
    <div>
      <p>MainPage</p>
      <Link href="/login">로그인 페이지로</Link>
      <form onSubmit={handleLogoutSubmit}>
        <button type="submit">로그아웃</button>
      </form>
    </div>
  );
};

export default MainPage;
