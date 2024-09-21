"use client";

import Image from "next/image";
import cont01 from "@/assets/images/img_main_cont01.png";
import cont02 from "@/assets/images/img_main_cont02.png";
import cont03 from "@/assets/images/img_main_cont03.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainAos = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="py-20 px-5">
      <ul>
        <li className="mb-20">
          <div className="tracking-tight">
            <p className="mb-2 text-gray900 text-2xl font-medium">
              나에게 맞는 <br />
              맞춤 식단을 간편하게 확인
            </p>
            <p className="mb-10 text-gray600">
              나의 건강 상태와 목표에 맞춘 식단을 AI가 매일 자동으로 추천합니다.{" "}
              <br />
              균형잡힌 영양소 정보를 바탕으로 다양한 식단을 안내해 드려요.
            </p>
          </div>
          <div data-aos="fade-left">
            <Image
              src={cont01}
              alt="간편하게, 나만을 위한 맞춤형 건강 솔루션"
              width={600}
              height={480}
            />
          </div>
        </li>
        <li className="mb-20">
          <div className="tracking-tight">
            <p className="mb-2 text-gray900 text-2xl font-medium">
              목표 달성을 <br />
              도와줄 최적화된 운동 플랜
            </p>
            <p className="mb-10 text-gray600">
              개인 맞춤형으로 설계된 운동 플랜으로 더 효과적인 건강관리를 할 수
              있어요. <br />
              간단한 운동 가이드와 함께 효율적으로 목표를 달성해 보세요.
            </p>
          </div>
          <div data-aos="fade-right">
            <Image
              src={cont02}
              alt="간편하게, 나만을 위한 맞춤형 건강 솔루션"
              width={600}
              height={480}
            />
          </div>
        </li>
        <li>
          <div className="tracking-tight">
            <p className="mb-2 text-gray900 text-2xl font-medium">
              건강한 <br />
              라이프스타일을 위한 커뮤니티
            </p>
            <p className="mb-10 text-gray600">
              혼자라서 어려웠던 경험, 한 번쯤은 있지 않으셨나요? <br />
              비슷한 목표를 가진 사람들과 소통하고, 성공적인 경험을 나누어
              보세요.
            </p>
          </div>
          <div data-aos="fade-left">
            <Image
              src={cont03}
              alt="간편하게, 나만을 위한 맞춤형 건강 솔루션"
              width={600}
              height={480}
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MainAos;
