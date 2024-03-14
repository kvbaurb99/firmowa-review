import React from "react";
import Counter from "../Utils/Counter";
import Image from "next/image";
import DrawVector from "../../assets/draw-vector.svg";

type Props = {
  inView: boolean;
  customRef: any;
};

export default function RightSection({ inView, customRef }: Props) {
  return (
    <div className="col-span-2 text-center lg:text-left">
      <span className="text-gradient text-lg lg:text-base font-semibold">
        O naszej firmie
      </span>
      <h2 className="font-bold text-3xl xl:text-5xl mt-2">
        Czym się zajmujemy?
      </h2>
      <div ref={customRef} className={`space-y-4 mt-6 inter xl:text-lg`}>
        <p>
          Jesteśmy znani z naszego zaangażowania w ciągłe innowacje oraz
          tworzenie rozwiązań, które rewolucjonizują sposób, w jaki marki
          promują swoje produkty i usługi w Internecie.
        </p>
        <p>
          Wyróżniamy się nie tylko jako kreatorzy systemów CMS, ale również jako
          eksperci w pisaniu unikalnych skryptów i projektowaniu stron
          internetowych od podstaw.
        </p>
        <p>
          Nasze rozwiązania są zoptymalizowane pod kątem wyszukiwarek, co
          sprawia, że ​​nasze klientów osiągają wyższe pozycje w wynikach
          wyszukiwania
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-12 lg:mt-12">
        <div className="font-bold space-y-3">
          <Counter isInView={inView} duration={800} end={15} />
          <p className="text-gradient text-xl lg:text-2xl">Lat doświadczenia</p>
        </div>
        <div className="space-y-3 font-bold">
          <Counter isInView={inView} duration={600} end={600} />
          <p className="text-gradient text-xl lg:text-2xl">
            Stworzonych portali
          </p>
        </div>
      </div>
      <Image
        src={DrawVector}
        width={175}
        height={175}
        alt="draw-vector"
        className="relative top-32 left-6 hidden lg:block"
      />
    </div>
  );
}
