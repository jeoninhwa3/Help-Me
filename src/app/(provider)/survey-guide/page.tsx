import Button from "@/components/Button";

const SurveyGuidePage = () => {
  return (
    <div className="flex flex-col justify-center min-h-main-height text-center">
      <p className="mb-2 text-gray900 text-xl font-semibold">
        나에게 맞는 맞춤 식단으로 <br />
        개인화된 건강 관리를 시작해보세요
      </p>
      <p className="mb-20 text-sm text-gray600">
        나의 간단한 정보와 건강 목표를 입력하면 <br />
        헬프미 AI 영양사가 식단을 추천해드려요
      </p>

      <Button
        buttonName="맞춤 식단 제공받기"
        theme="primaryGradient"
        width="w-[320px]"
      ></Button>
    </div>
  );
};

export default SurveyGuidePage;
