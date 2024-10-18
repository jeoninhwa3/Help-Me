"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const MainBanner = () => {
  const router = useRouter();
  const handleGotoSurvey = () => {
    router.push("/mydiet");
  };

  return (
    <section className="bg-gray100 px-5 py-20">
      <div className="text-center">
        <p className="text-gray900 text-2xl font-extrabold">
          Health Protect me
        </p>
        <p className="mb-6 text-gray800 text-lg">
          당신의 건강을 함께 지켜드릴게요
        </p>
        <Button
          buttonName="맞춤 식단 제공받기"
          theme="primaryGradient"
          padding="py-[18px]"
          onClick={handleGotoSurvey}
        ></Button>
      </div>
    </section>
  );
};

export default MainBanner;
