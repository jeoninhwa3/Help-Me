import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="absolute top-2/4 -translate-y-2/4 text-center">
      <p className="text-gray900 text-2xl font-extrabold">Health Protect me</p>
      <p className="mt-2 text-gray600 text-base">
        지금 로그인하고 나만의 맞춤 식단을 시작하세요! <br />
        나의 건강 목표를 쉽게 달성할 수 있습니다
      </p>
      <button
        className="w-[320px] leading-5 mt-10 py-4 bg-pramary500 text-white border border-solid rounded-lg"
        type="button"
      >
        로그인
      </button>
      <span className="flex justify-end mt-1 pr-1 text-gray900 text-sm">
        <Link href="/login/sign-up">회원가입</Link>
      </span>
    </div>
  );
};

export default LoginPage;
