import SignUpForm from "./_components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="text-center pt-5 pb-6">
      <p className="text-gray900 text-2xl font-extrabold">
        Help Me와 함께 하기
      </p>
      <p className="mt-1 text-gray600 text-base">
        나에게 꼭 맞는 식단을 추천해드려요!
      </p>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
