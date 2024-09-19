"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/-]{6,}$/.test(
      password
    );
  const validateNickname = (nickname: string) =>
    /^[a-zA-Z0-9]{2,10}$/.test(nickname);

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("'abc@gmail.com'의 이메일 형식으로 작성해 주세요.");
      return;
    }

    if (!validatePassword(password)) {
      setNicknameError(
        "비밀번호는 최소 6자 이상, 영문자와 숫자를 포함해야 합니다."
      );
      return;
    }

    if (!validateNickname(nickname)) {
      setPasswordError(
        "닉네임은 2자 이상 10자 이하로 영문자와 숫자만 가능합니다."
      );
      return;
    }

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
      console.log("로그인 성공:", data);
      router.push("/");
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
        <div className="flex flex-col mt-6 text-left">
          <label className="text-gray900 text-sm" htmlFor="user-email">
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
        <div className="flex flex-col mt-6 text-left">
          <label className="text-gray900 text-sm" htmlFor="user-nickname">
            닉네임
          </label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
            type="text"
            id="user-nickname"
            placeholder="이나짱"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-6 text-left">
          <label className="text-gray900 text-sm" htmlFor="user-password">
            비밀번호
          </label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
            type="password"
            id="user-password"
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
