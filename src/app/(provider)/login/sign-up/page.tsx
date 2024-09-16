"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const SignUpPage = () => {
  const supabase = createClient();
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
        },
      },
    });

    if (error) {
      console.error("Error during sign up:", error.message);
    } else {
      console.log("User signed up successfully:", data);
    }
  };

  return (
    <div className="absolute top-2/4 -translate-y-2/4 text-center">
      <p className="text-gray900 text-2xl font-extrabold">
        Help Me와 함께 하기
      </p>
      <p className="mt-1 text-gray600 text-base">
        나에게 꼭 맞는 식단을 추천해드려요!
      </p>
      <form onSubmit={handleSignUpSubmit}>
        <div className="flex flex-col mt-6">
          <label
            className="text-gray900 text-sm text-left"
            htmlFor="user-email"
          >
            이메일
          </label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
            type="text"
            id="user-email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-6">
          <label
            className="text-gray900 text-sm text-left"
            htmlFor="user-nickname"
          >
            닉네임
          </label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
            type="text"
            id="user-nickname"
            placeholder="홍길동"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-6">
          <label
            className="text-gray900 text-sm text-left"
            htmlFor="user-nickname"
          >
            비밀번호
          </label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
            type="text"
            id="user-nickname"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-[320px] leading-5 mt-8 py-4 bg-pramary500 text-white border border-solid rounded-lg"
          type="submit"
        >
          완료
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
