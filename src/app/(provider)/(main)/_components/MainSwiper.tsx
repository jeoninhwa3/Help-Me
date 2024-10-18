"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidesData } from "../_data/slidesData";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const MainSwiper = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="text-white max-h-screen xl:!mx-0"
      spaceBetween={16}
      slidesPerView={"auto"}
      direction={"horizontal"}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          direction: "horizontal",
          spaceBetween: 40,
          speed: 4000,
        },
        1280: {
          direction: "vertical",
          spaceBetween: 40,
          speed: 2500,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
        },
      }}
    >
      {slidesData.map((slide) => {
        return (
          <SwiperSlide
            className="cursor-pointer !w-[270px] !h-[146px] md:!w-[420px] md:!h-[230px]"
            key={slide.id}
          >
            <Image src={slide.imageUrl} alt="" width={480} height={260} />
            <div className="text-area flex flex-col justify-between absolute top-0 left-0 w-full h-full opacity-0 z-[2] p-4 pb-2 md:p-6">
              <div>
                <p className="text-sm font-semibold line-clamp-1 md:font-semibold md:text-lg">
                  {slide.title}
                </p>
                <p className="line-clamp-3 text-xs mt-2 md:text-base">
                  {slide.description}
                </p>
              </div>
              <div className="text-disabeld text-xs md:text-base">
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

export default MainSwiper;
