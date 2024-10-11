import { StaticImageData } from "next/image";
import SwiperImg11 from "@/assets/images/img_main_swiper11.png";
import SwiperImg12 from "@/assets/images/img_main_swiper12.png";
import SwiperImg13 from "@/assets/images/img_main_swiper13.png";
import SwiperImg14 from "@/assets/images/img_main_swiper14.png";
import SwiperImg15 from "@/assets/images/img_main_swiper15.png";
import SwiperImg16 from "@/assets/images/img_main_swiper16.png";
import SwiperImg17 from "@/assets/images/img_main_swiper17.png";

export interface SlideData {
  id: number;
  title: string;
  imageUrl: string | StaticImageData;
  description: string;
  ageGender: string;
  purpose: string;
}

export const slidesReverseData: SlideData[] = [
  {
    id: 1,
    title: "좀 더 다양한 종류를 추천해주면 좋겠네요.",
    imageUrl: SwiperImg11,
    description: "다양성이 더 생기면 좋겠어요.",
    ageGender: "40대 남성",
    purpose: "건강 식사 목표",
  },
  {
    id: 2,
    title: "뭐 먹을지 고민할 필요가 없어요.",
    imageUrl: SwiperImg12,
    description:
      "앱 덕분에 쉽게 재료를 선택하고, 건강한 식단을 계획할 수 있었어요. 매일 뭘 먹을지 고민할 필요가 없어졌어요.",
    ageGender: "20대 여성",
    purpose: "체중 감량 목표",
  },
  {
    id: 3,
    title: "회사에서 저녁 뭐 먹을지 고민을 하지 않게 되었습니다.",
    imageUrl: SwiperImg13,
    description:
      "매일 저녁 식사를 준비할 때 어떤 요리를 할지 고민이었는데, 앱에서 추천해주는 식단 덕분에 고민이 줄었어요. 맛도 좋고 건강도 챙길 수 있어서 만족합니다.",
    ageGender: "30대 여성",
    purpose: "건강 식사 목표",
  },
  {
    id: 4,
    title: "식단 추천 너무 좋아요.",
    imageUrl: SwiperImg14,
    description:
      "사실 샐러드를 주로 먹는건 알고 있는데, 어떤 샐러드를 먹을지도 고민이었거든요. 그런 고민을 덜어줘서 좋아요.",
    ageGender: "20대 여성",
    purpose: "체중 감량 목표",
  },
  {
    id: 5,
    title: "헬프미가 추천해준 저지방 햄버거",
    imageUrl: SwiperImg15,
    description: "저칼로리인데 생각보다 맛있어요!!",
    ageGender: "20대 남성",
    purpose: "체중 감량 목표",
  },
  {
    id: 6,
    title: "두부 파스타를 만들었어요.",
    imageUrl: SwiperImg16,
    description:
      "평소에 파스타를 자주 먹었는데, 추천 식단에서 칼로리와 지방을 비슷하게 만들 수 있어서 두부를 사용해서 만들어 봤어요! 식감이 너무 좋았고 면이 소스와 잘 섞여서 정말 맛있었어요. 건강을 중요시하는 분들이나 새로운 맛을 시도해보고 싶은 분들께는 추천할 만한 레시피입니다.",
    ageGender: "20대 남성",
    purpose: "건강 식사 목표",
  },
  {
    id: 7,
    title: "재료들로 만들어 먹었습니다.",
    imageUrl: SwiperImg17,
    description:
      "추천해준 식단과 비슷하게 만들었는데, 재료랑 추천된 식단 비교 기능이 있는 것도 좋을 것 같아요.",
    ageGender: "30대 여성",
    purpose: "건강 식사 목표",
  },
];
