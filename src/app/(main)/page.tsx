import Image from "next/image";
import thumbnail from "@/assets/images/img_thumbnail.png";
import Header from "../(provider)/_components/Header";
import Footer from "../(provider)/_components/Footer";
import MainAos from "./_components/MainAos";

const MainPage = () => {
  return (
    <div>
      <Header />
      <main className="bg-default pt-14">
        <section className="pt-10 pb-20 text-center px-5">
          <Image src={thumbnail} alt="썸네일" width={320} height={244} />
          <p className="leading-9 mt-10 text-gray900 text-[28px] font-medium">
            간편하게, 나만을 위한 <br /> 맞춤형 건강 솔루션
          </p>
          <button
            className="w-[240px] leading-5 mt-10 py-4 bg-[#FF7A85] font-semibold text-white border border-solid rounded-lg shadow-primary-btn"
            type="button"
          >
            맞춤 식단 제공받기
          </button>
        </section>

        <section className="bg-[#181A1F]">
          {/* swiper component */}
          <div>
            <p className="text-white text-2xl font-medium">사용자들의 이야기</p>
            <p className="text-white opacity-60">추천 식단과 함께한 경험</p>
          </div>
          {/* swiper component */}
        </section>

        <MainAos />

        <section className="bg-gray100 px-5 py-20">
          <div className="text-center">
            <p className="text-gray900 text-2xl font-extrabold">
              Health Protect me
            </p>
            <p className="text-gray800 text-lg">
              당신의 건강을 함께 지켜드릴게요
            </p>
            <button
              className="w-[240px] leading-5 mt-6 py-4 bg-[#FF7A85] font-semibold text-white border border-solid rounded-lg shadow-primary-btn"
              type="button"
            >
              맞춤 식단 제공받기
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
