import React from "react";
import data from "../../data/offers.json";
import SingleOffer from "./SingleOffer";
import Image from "next/image";
import StarSmall from "../../assets/star-light-small.svg";

type AdditionalProps = {
  title: string;
};

type OfferProps = {
  id: number;
  name: string;
  additional: AdditionalProps[];
};

export default async function Offers() {
  const offers: OfferProps[] = JSON.parse(JSON.stringify(data));
  return (
    <section
      id="offers"
      className="page-sizing mt-6 lg:mt-24 mb-28 lg:mb-44 relative"
    >
      <div className="flex flex-col items-center gap-2 text-center lg:text-left">
        <span className="text-gradient text-lg font-semibold">Rekrutacja</span>
        <h2 className="font-bold text-3xl lg:text-5xl">
          Aktualnie poszukujemy
        </h2>
      </div>
      <div className="flex flex-col gap-4 mt-8 lg:mt-12 w-full mx-auto xl:w-4/5">
        {offers.map((offer: OfferProps) => {
          return (
            <SingleOffer
              key={offer.id}
              name={offer.name}
              additional={offer.additional}
            />
          );
        })}
      </div>
      <Image
        src={StarSmall}
        width={85}
        height={85}
        alt="star-big"
        className="absolute -bottom-32 left-12 animation-rotate hidden lg:block"
      />
    </section>
  );
}
