"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleValidateEmail = (value: string) => {
    if (!validateEmail(value)) {
      setEmailError("'abc@gmail.com'의 이메일 형식으로 작성해 주세요.");
    } else {
      setEmailError(null);
    }
    setEmail(value);
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setPasswordError("이메일과 비밀번호를 다시 확인해 주세요.");
    } else {
      console.log("로그인 성공:", data);
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="flex flex-col mt-6 text-left">
        <label className="text-gray900 text-sm" htmlFor="user-email">
          이메일
        </label>
        <input
          className="mt-1 bg-default border-b border-gray300 border-solid focus:outline-none"
          type="email"
          id="user-email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => handleValidateEmail(e.target.value)}
        />
        {emailError && (
          <p className="text-backgroundError mt-1 -mb-2 text-sm">
            {emailError}
          </p>
        )}
      </div>
      <div className="flex flex-col mt-6 text-left">
        <label className="text-gray900 text-sm" htmlFor="user-password">
          비밀번호
        </label>
        <input
          className="mt-1 bg-default border-b border-gray300 border-solid focus:outline-none"
          type="password"
          id="user-password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="text-backgroundError mt-1 -mb-2 text-sm">
            {passwordError}
          </p>
        )}
      </div>
      <button
        className="w-[320px] leading-5 mt-10 py-4 bg-pramary500 text-white border border-solid rounded-lg"
        type="submit"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
