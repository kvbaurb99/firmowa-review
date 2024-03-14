"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import Arrow from "../Utils/Arrow";
import FlyArrow from "../../assets/portfolio/fly-arrow.svg";
import Slider from "../Mobile/Slider/Slider";
import SliderDesktop from "../Mobile/Slider/SliderDesktop";
import { useInView } from "react-intersection-observer";
import { useScroll } from "../Hooks/useScroll";

type Props = {
  isMobile: boolean;
};

export default function Portfolio({ isMobile }: Props) {
  const { slideRef, canScroll } = useScroll();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const scrollRight = useCallback(() => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += 800;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const scrollLeft = useCallback(() => {
    if (slideRef.current) {
      slideRef.current.scrollLeft -= 800;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <section id="projects" className="pt-20">
      <div
        ref={ref}
        className="page-sizing flex flex-col lg:flex-row items-center lg:justify-between"
      >
        <div
          className={`text-center lg:text-left ${
            inView ? "animation-fade-in" : ""
          }`}
        >
          <span className="text-gradient font-semibold text-base lg:text-lg">
            Portfolio
          </span>
          <h2 className="font-bold text-3xl lg:text-5xl mt-1.5">
            Nasze realizacje
          </h2>
        </div>
        <Image
          src={FlyArrow}
          width={250}
          height={250}
          alt="fly-arrow"
          className={`relative bottom-4 hidden lg:block ${
            inView ? "animation-from-bottom" : ""
          }`}
        />
        <div className="hidden lg:flex items-center gap-8">
          <Arrow isLeft handleClick={scrollLeft} isColor={canScroll.left} />
          <Arrow handleClick={scrollRight} isColor={canScroll.right} />
        </div>
      </div>
      {!isMobile ? <SliderDesktop sliderRef={slideRef} /> : null}
      {isMobile ? <Slider /> : null}
    </section>
  );
}
