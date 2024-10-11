import Image from "next/image";
import thumbnail from "@/assets/images/img_thumbnail.png";
import MainAos from "./_components/MainAos";
import MainSwiper from "./_components/MainSwiper";
import MainReverseSwiper from "./_components/MainReverseSwiper";
import Button from "@/components/Button";

const MainPage = () => {
  return (
    <div>
      <main className="bg-default">
        <section className="pt-10 pb-20 text-center px-5">
          <Image src={thumbnail} alt="썸네일" width={320} height={244} />
          <p className="leading-9 mt-10 mb-6 text-gray900 text-[28px] font-medium">
            간편하게, 나만을 위한 <br /> 맞춤형 건강 솔루션
          </p>
          <Button
            buttonName="맞춤 식단 제공받기"
            theme="primaryGradient"
          ></Button>
        </section>

        <section className="bg-[#181A1F] py-20">
          <MainSwiper />
          <div className="text-center py-20">
            <p className="text-white text-2xl font-medium">사용자들의 이야기</p>
            <p className="text-white opacity-60 mt-1">
              추천 식단과 함께한 경험
            </p>
          </div>
          <MainReverseSwiper />
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
            ></Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
