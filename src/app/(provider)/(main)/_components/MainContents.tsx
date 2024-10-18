"use client";

import Button from "@/components/Button";
import Image from "next/image";
import thumbnail from "@/assets/images/img_thumbnail.png";
import { useRouter } from "next/navigation";

const MainContents = () => {
  const router = useRouter();
  const handleGotoSurvey = () => {
    router.push("/mydiet");
  };

  return (
    <section className="max-w-container pt-10 pb-20 px-5 mx-auto text-center md:main-web-height md:px-10 lg:py-40">
      <div className="lg:flex lg:justify-between lg:items-end lg:flex-row-reverse lg:text-left lg:max-w-[790]">
        <div className="lg:ml-16">
          <Image
            src={thumbnail}
            alt="썸네일"
            width={790}
            height={606}
            className="w-full"
          />
        </div>
        <div className="lg:w-[400px] lg:pb-20">
          <p className="leading-9 mt-10 mb-6 text-gray900 text-[28px] font-medium md:text-[40px] md:leading-tight lg:w-[410px] xl:text-5xl xl:leading-tight">
            간편하게, 나만을 위한 <br /> 맞춤형 건강 솔루션
          </p>
          <Button
            buttonName="맞춤 식단 제공받기"
            theme="primaryGradient"
            padding="py-[18px]"
            onClick={handleGotoSurvey}
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default MainContents;
