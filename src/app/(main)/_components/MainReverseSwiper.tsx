"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { slidesReverseData } from "../_data/slidesReverseData";

const MainReverseSwiper = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="text-white"
      spaceBetween={16}
      slidesPerView={"auto"}
      direction={"horizontal"}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
    >
      {slidesReverseData.map((slide) => {
        return (
          <SwiperSlide
            className="cursor-pointer !w-[270px] !h-[146px]"
            key={slide.id}
          >
            <Image src={slide.imageUrl} alt="" width={270} height={146} />
            <div className="text-area flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 z-[2] p-4 pb-2">
              <div>
                <p className="text-sm font-semibold line-clamp-1">
                  {slide.title}
                </p>
                <p className="line-clamp-3 text-xs mt-2">{slide.description}</p>
              </div>
              <div className="text-disabeld text-xs">
                <p> {slide.ageGender}</p>
                <p> {slide.purpose}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainReverseSwiper;
