"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
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
    /^[a-zA-Z0-9가-힣]+$/.test(nickname) &&
    Array.from(nickname).length >= 2 &&
    Array.from(nickname).length <= 6;

  const handleValidateEmail = (value: string) => {
    if (!validateEmail(value)) {
      setEmailError("'abc@gmail.com'의 이메일 형식으로 작성해 주세요.");
    } else {
      setEmailError(null);
    }
    setEmail(value);
  };

  const handleValidateNickname = (value: string) => {
    if (!validateNickname(value)) {
      setNicknameError("닉네임은 2자 이상 6자 이하로 입력해 주세요.");
    } else {
      setNicknameError(null);
    }
    setNickname(value);
  };

  const handleValidatePassword = (value: string) => {
    if (!validatePassword(value)) {
      setPasswordError("비밀번호는 6자 이상, 영문자와 숫자를 포함해야 합니다.");
    } else {
      setPasswordError(null);
    }
    setPassword(value);
  };

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
      console.log("로그인 성공:", data);
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSignUpSubmit}>
      <div className="flex flex-col relative mt-3 text-left">
        <label className="text-gray900 text-sm" htmlFor="user-email">
          이메일
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="text"
          id="user-email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={(e) => handleValidateEmail(e.target.value)}
        />
        {emailError && (
          <p className="absolute -bottom-2 text-backgroundError mt-1 -mb-3 text-sm">
            {emailError}
          </p>
        )}
      </div>
      <div className="flex flex-col relative mt-6 text-left">
        <label className="text-gray900 text-sm" htmlFor="user-nickname">
          닉네임
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="text"
          id="user-nickname"
          placeholder="이나짱"
          value={nickname}
          onChange={(e) => handleValidateNickname(e.target.value)}
        />
        {nicknameError && (
          <p className="absolute -bottom-2 text-backgroundError mt-1 -mb-3 text-sm">
            {nicknameError}
          </p>
        )}
      </div>
      <div className="flex flex-col relative mt-6 text-left">
        <label className="text-gray900 text-sm" htmlFor="user-password">
          비밀번호
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="password"
          id="user-password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => handleValidatePassword(e.target.value)}
        />
        {passwordError && (
          <p className="absolute -bottom-2 text-backgroundError mt-1 -mb-3 text-sm">
            {passwordError}
          </p>
        )}
      </div>

      <button
        className="w-[320px] leading-5 mt-8 py-4 bg-pramary500 text-white border border-solid rounded-lg"
        type="submit"
      >
        완료
      </button>
    </form>
  );
};

export default SignUpForm;
