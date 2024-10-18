import MainAos from "./_components/MainAos";
import MainSwiper from "./_components/MainSwiper";
import MainReverseSwiper from "./_components/MainReverseSwiper";
import Button from "@/components/Button";
import MainContents from "./_components/MainContents";
import MainBanner from "./_components/MainBanner";

const MainPage = () => {
  return (
    <div>
      <main className="bg-default pt-14">
        <MainContents />

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

        <MainBanner />
      </main>
    </div>
  );
};

export default MainPage;
