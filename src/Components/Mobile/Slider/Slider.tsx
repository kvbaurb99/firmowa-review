import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageOne from "../../../assets/portfolio/blogcms.png";
import ImageTwo from "../../../assets/portfolio/fotowoltaika.png";
import ImageThree from "../../../assets/portfolio/magro.png";
import ImageFour from "../../../assets/portfolio/blogtwo.png";
import Image from "next/image";
import "swiper/css";

export default function Slider() {
  return (
    <Swiper loop slidesPerView={1} spaceBetween={5} className="px-2 mt-6">
      <SwiperSlide className="px-2">
        <figure className="pt-4 bg-[#FDF2F2] rounded-xl shadow-lg h-[300px]">
          <Image
            src={ImageOne}
            width={380}
            quality={100}
            height={300}
            alt="title"
            className="w-full h-full"
          />
        </figure>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-xl">Edukacja Krytyczna</h3>
          <p className="text-sm inter">Blog CMS</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <figure className="pt-4 bg-[#FDF2F2] rounded-xl shadow-lg h-[300px]">
          <Image
            src={ImageTwo}
            width={380}
            quality={100}
            height={300}
            alt="title"
            className="w-full h-full"
          />
        </figure>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-xl">Fotowoltaika - pl</h3>
          <p className="text-sm inter">Landing page</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <figure className="pt-4 bg-[#FDF2F2] rounded-xl shadow-lg h-[300px]">
          <Image
            src={ImageThree}
            width={380}
            quality={100}
            height={300}
            alt="title"
            className="w-full h-full"
          />
        </figure>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-xl">Magro - przetwórstwo pieczarek</h3>
          <p className="text-sm inter">Landing page</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <figure className="pt-4 bg-[#FDF2F2] rounded-xl shadow-lg h-[300px]">
          <Image
            src={ImageFour}
            width={380}
            quality={100}
            height={300}
            alt="title"
            className="w-full h-full"
          />
        </figure>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-xl">Coimdac.pl</h3>
          <p className="text-sm inter">Blog CMS</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
