"use client";
import React from "react";
import Image from "next/image";
import ImageOne from "../../assets/portfolio/one.png";
import ImageTwo from "../../assets/portfolio/two.png";
import ImageThree from "../../assets/portfolio/three.png";
import VectorMan from "../../assets/portfolio/vector-man.svg";
import VectorWoman from "../../assets/portfolio/vector-woman.svg";
import VectorLeaf from "../../assets/portfolio/vector-leaf.svg";
import { useInView } from "react-intersection-observer";

export default function Achievements() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section id="achiev" className="w-full  text-white min-h-28 py-24">
      <div className="w-11/12 mx-auto bg-[#255FFF] p-4 lg:p-24 rounded-xl shadow-lg relative">
        <div className="flex flex-col lg:grid grid-cols-2 gap-4 lg:gap-8">
          <div ref={ref} className="flex flex-col gap-6">
            <div
              className={`text-center lg:text-left mt-10 lg:mt-0 ${
                inView ? "animation-fade-in" : "opacity-0"
              }`}
            >
              <span className="font-semibold text-base xl:text-lg">
                Nasze osiągnięcia
              </span>
              <h2 className="font-bold text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl mt-2 2xl:leading-[60px]">
                Co udało nam się osiągnąć wykorzystując najnowsze technologie
              </h2>
            </div>
            <Image
              src={ImageOne}
              width={600}
              quality={100}
              height={400}
              alt="title"
              className={`w-full h-full lg:mt-4 ${
                inView ? "animation-scale" : "lg:scale-0"
              }`}
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <Image
              src={ImageTwo}
              width={600}
              quality={100}
              height={500}
              alt="title"
              className={`col-span-1 w-full ${
                inView ? "animation-scale-two" : "lg:scale-0"
              }`}
            />
            <Image
              src={ImageThree}
              width={400}
              quality={100}
              height={500}
              alt="title"
              className={`col-span-1 w-full h-full ${
                inView ? "animation-scale-three" : "lg:scale-0"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col lg:grid grid-cols-3 mt-16 lg:mt-12 gap-12 lg:gap-6 text-center lg:text-left">
          <div>
            <h3 className="font-bold text-xl 2xl:text-3xl">
              Średni czas trwania sesji (Average Session Duration)
            </h3>
            <p className="mt-2 leading-6 inter">
              Średni czas, jaki użytkownicy spędzają na Twojej stronie podczas
              jednej sesji. Wyższy średni czas trwania sesji może wskazywać na
              większe zaangażowanie użytkowników.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl 2xl:text-3xl">
              Źródła ruchu (Traffic Sources)
            </h3>
            <p className="mt-2 leading-6 inter">
              Informuje, skąd pochodzą użytkownicy, którzy odwiedzają Twoją
              stronę. Może to być wynik wyszukiwania organicznego, reklamy,
              mediów społecznościowych, linki z innych stron, itp.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl 2xl:text-3xl">
              Słowa kluczowe (Keywords)
            </h3>
            <p className="mt-2 leading-6 inter">
              Słowa lub frazy wprowadzone przez użytkowników w wyszukiwarkę,
              które doprowadziły ich na Twoją stronę.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:mt-24 mt-12 mb-10 lg:mb-0">
          <button className="max-w-fit bg-white text-current px-8 rounded-lg py-3 text-lg font-medium">
            Skontaktuj się z nami
          </button>
        </div>
        <Image
          src={VectorMan}
          width={200}
          height={200}
          alt="vector"
          className="absolute -bottom-24 left-24 2xl:left-44 hidden lg:block animation-fade-in"
        />
        <div className="flex gap-4 absolute -bottom-20 2xl:-bottom-16 right-20 2xl:right-44">
          <Image
            src={VectorWoman}
            width={135}
            height={135}
            alt="vector"
            className="hidden lg:block animation-fade-in"
          />
          <Image
            src={VectorLeaf}
            width={125}
            height={125}
            alt="vector"
            className="relative left-8 2xl:left-16 bottom-10 hidden lg:block animation-shake"
          />
        </div>
      </div>
    </section>
  );
}
