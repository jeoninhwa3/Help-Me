const SignUpPage = () => {
  return (
    <div className="absolute top-2/4 -translate-y-2/4 text-center">
      <p className="text-gray900 text-2xl font-extrabold">
        Help Me와 함께 하기
      </p>
      <p className="mt-1 text-gray600 text-base">
        나에게 꼭 맞는 식단을 추천해드려요!
      </p>
      <form>
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
          />
        </div>

        <button
          className="w-[320px] leading-5 mt-8 py-4 bg-pramary500 text-white border border-solid rounded-lg"
          type="submit"
          disabled={true}
        >
          완료
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;