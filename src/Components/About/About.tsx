"use client";
import React from "react";
import LeafMain from "../../assets/about/leaf-about.svg";
import LeafDown from "../../assets/about/leaf-three-about.svg";
import DrawVector from '../../assets/draw-vector.svg'
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section id="about" className="relative py-12 lg:py-40 w-full">
      <div
        className="page-sizing flex flex-col-reverse lg:grid grid-cols-4 gap-12 2xl:gap-16"
      >
        <LeftSection inView={inView} />
        <RightSection inView={inView} customRef={ref} />

      </div>
      <Image
        src={LeafMain}
        width={175}
        height={175}
        loading="lazy"
        alt="leaf"
        className={`absolute top-0 -right-6 hidden lg:block`}
      />
      <Image
        src={LeafDown}
        width={175}
        height={175}
        loading="lazy"
        alt="leaf"
        className={`absolute -bottom-10 right-12 hidden lg:block ${
          inView ? "animation-fade-in" : ""
        }`}
      />
    </section>
  );
}
