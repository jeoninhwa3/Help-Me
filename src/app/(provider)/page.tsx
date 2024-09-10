import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <p>MainPage</p>
      <Link href="/login">로그인 페이지로</Link>
    </div>
  );
};

export default MainPage;
