import { StaticImageData } from "next/image";
import SwiperImg01 from "@/assets/images/img_main_swiper01.png";
import SwiperImg02 from "@/assets/images/img_main_swiper02.png";
import SwiperImg03 from "@/assets/images/img_main_swiper03.png";
import SwiperImg04 from "@/assets/images/img_main_swiper04.png";
import SwiperImg05 from "@/assets/images/img_main_swiper05.png";
import SwiperImg06 from "@/assets/images/img_main_swiper06.png";
import SwiperImg07 from "@/assets/images/img_main_swiper07.png";

export interface SlideData {
  id: number;
  title: string;
  imageUrl: string | StaticImageData;
  description: string;
  ageGender: string;
  purpose: string;
}

export const slidesData: SlideData[] = [
  {
    id: 1,
    title: "추천 식단에 따라 스테이크를 포함한 저녁을 먹어봤습니다.",
    imageUrl: SwiperImg01,
    description:
      "구운 채소랑 현미밥과 같이 먹으니 좀 더 건강한 느낌이었고 균형 잡힌 식단으로 좋았어요.",
    ageGender: "20대 여성",
    purpose: "체중 감량 목표",
  },
  {
    id: 2,
    title: "간식으로 팬 케이크 만들었습니다.",
    imageUrl: SwiperImg02,
    description: "간식까지 추천해줘서 좋아요!! 식사 보충 겸 간식까지~",
    ageGender: "20대 여성",
    purpose: "건강 식사 목표",
  },
  {
    id: 3,
    title: "식단 고민할 필요가 없어져서 편해요.",
    imageUrl: SwiperImg03,
    description:
      "매일 퇴근하면서 저녁 뭐 먹지 고민하다가 배민키고 시켜먹는게 일상이었는데, 식단대로 먹기만 하면 되니 돈도 절약되고 편합니다.",
    ageGender: "30대 여성",
    purpose: "체중 증량 목표",
  },
  {
    id: 4,
    title: "다이어트 식단으로 효과적.",
    imageUrl: SwiperImg04,
    description:
      "체중 감량으로 선택하니 적당히 포만감도 있는데 다이어트에 효과적이에요..!",
    ageGender: "20대 남성",
    purpose: "체중 감량 목표",
  },
  {
    id: 5,
    title: "건강한 식사하고 싶어서 이용했는데",
    imageUrl: SwiperImg05,
    description:
      "건강 식사 목표로 선택하고 식단대로 먹으니 몸이 건강해진 기분입니다. 추천 식단과 괜찮은 상품을 연결해주면 더 좋을 것 같아요.",
    ageGender: "30대 남성",
    purpose: "건강 식사 목표",
  },
  {
    id: 6,
    title: "헬프미를 사용한 이후로 체중 관리가 잘 돼요.",
    imageUrl: SwiperImg06,
    description:
      "매일 AI가 제공해주는 맞춤형 식단 덕분에 건강한 식사를 손쉽게 할 수 있었고, 운동 추천도 제 개인 목표에 맞게 잘 맞춰져 있는 것 같아 효과를 느끼고 있습니다. 또 직관적이고 보기 쉬운 인터페이스라 매일매일 사용하게 되는 것 같아요.",
    ageGender: "20대 남성",
    purpose: "체중 감량 목표",
  },
  {
    id: 7,
    title: "식단 추천에 운동까지.",
    imageUrl: SwiperImg07,
    description:
      "식단을 관리받고 싶어서 이용했는데, 원래 운동도 해야지.. 하고만 생각하고 있었는데 집에서 간단히 할 수 있는 것들을 추천해주니 같이 하게 돼요!!",
    ageGender: "30대 여성",
    purpose: "건강 식사 목표",
  },
];
