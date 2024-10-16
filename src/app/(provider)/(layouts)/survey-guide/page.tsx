"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const SurveyGuidePage = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/survey");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-main-height pt-20 text-center sm:pt-40">
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
        padding="py-4"
        onClick={handleNavigate}
      ></Button>
    </div>
  );
};

export default SurveyGuidePage;
