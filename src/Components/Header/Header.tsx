import React from "react";
import HeaderImage from "../../assets/header/header-image.svg";
import HeaderMobile from "../../assets/header/header-mobile.svg";
import StarSmall from "../../assets/star-light-small.svg";
import StarBig from "../../assets/star-light-big.svg";
import StarBlue from "../../assets/star-blue-small.svg";
import VectorBlue from "../../assets/vector-home-blue.svg";
import Image from "next/image";

type Props = {
  isMobile: boolean;
};

export default function Header({ isMobile }: Props) {
  return (
    <header className="pt-32">
      <div className="flex flex-col lg:flex-row lg:items-center page-sizing lg:relative lg:justify-between h-[550px] xl:h-[650px]">
        <div className="flex flex-col lg:max-w-sm xl:max-w-md 2xl:max-w-xl text-center lg:text-left animation-bottom-title">
          <h1 className="text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold">
            Innowacje w SEO{" "}
            <span className="text-gradient">Affiliate Marketingu</span>
          </h1>
          <p className="text-xl lg:text-lg xl:text-2xl mt-4 inter">
            Jesteśmy twórcami i innowatorami w branży marketingu affiliacyjnego.
          </p>
          <div className="w-full flex flex-col items-center lg:items-start">
            <button className="bg-page cursor-pointer mt-6 py-2.5 px-8 rounded-lg text-base xl:text-lg text-white font-semibold max-w-fit">
              Nasze projekty
            </button>
          </div>
        </div>
        {!isMobile ? (
          <figure className="absolute xl:-right-16 2xl:right-12 hidden lg:block">
            <Image
              src={HeaderImage}
              width={1100}
              priority
              height={600}
              alt="Innowacje w SEO Affiliate Marketingu"
              className="object-cover"
            />
          </figure>
        ) : null}
        {isMobile ? (
          <figure className="lg:hidden mt-12">
            <Image
              src={HeaderMobile}
              width={600}
              priority
              height={600}
              alt="Innowacje w SEO Affiliate Marketingu"
              className="object-cover"
            />
          </figure>
        ) : null}
        <Image
          src={StarBig}
          width={115}
          height={115}
          alt="star-big"
          className="absolute top-4 -right-16 animation-rotate hidden lg:block"
        />
        <Image
          src={StarSmall}
          width={95}
          height={95}
          alt="star-big"
          className="absolute top-10 -left-6 animation-rotate hidden lg:block"
        />
        <Image
          src={StarBlue}
          width={65}
          height={65}
          alt="star-big"
          className="absolute lg:-bottom-0 xl:-bottom-4 2xl:-bottom-10 left-1/2 animation-rotate hidden lg:block"
        />
        <Image
          src={VectorBlue}
          width={55}
          height={55}
          alt="star-big"
          className="absolute lg:-bottom-0 xl:-bottom-4 2xl:-bottom-28 left-[80%] hidden lg:block animation-scale"
        />
      </div>
    </header>
  );
}
