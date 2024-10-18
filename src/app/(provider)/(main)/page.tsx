import Image from "next/image";
import thumbnail from "@/assets/images/img_thumbnail.png";
import MainAos from "./_components/MainAos";
import MainSwiper from "./_components/MainSwiper";
import MainReverseSwiper from "./_components/MainReverseSwiper";
import Button from "@/components/Button";

const MainPage = () => {
  return (
    <div>
      <main className="bg-default pt-14">
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
              ></Button>
            </div>
          </div>
        </section>

        <section className="bg-[#181A1F] py-20 xl:h-[984px] xl:py-0 xl:overflow-hidden">
          <div className="xl:max-w-container xl:flex xl:justify-between xl:items-center xl:px-10 xl:mx-auto">
            <MainSwiper />
            <div className="text-center py-20 xl:py-0">
              <p className="text-white text-2xl font-medium">
                사용자들의 이야기
              </p>
              <p className="text-white opacity-60 mt-1">
                추천 식단과 함께한 경험
              </p>
            </div>
            <MainReverseSwiper />
          </div>
        </section>

        <MainAos />

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
            ></Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
