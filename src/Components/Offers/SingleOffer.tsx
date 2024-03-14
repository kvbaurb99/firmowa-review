import React from "react";
import Image from "next/image";
import Avatar from "../../assets/offers/avatar.svg";

type AdditionalProps = {
  title: string;
};

type Props = {
  name: string;
  additional: AdditionalProps[];
};

export default function SingleOffer({ name, additional }: Props) {
  return (
    <div className="hover:shadow-lg duration-300 flex-col lg:flex-row flex lg:justify-between items-center border border-[#3C3C3C]/15 p-6 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <Image
          src={Avatar}
          width={75}
          height={75}
          alt="avatar"
          loading="lazy"
          className="hidden lg:block"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl text-center lg:text-left">{name}</h3>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-2 lg:gap-3 font-medium text-sm mt-2 lg:mt-0 items-center">
            {additional.map((additional: AdditionalProps, index: number) => {
              return (
                <p
                  key={index}
                  className="mt-2 border-2 border-[#51A9F3] lg:py-1 py-2 rounded-full px-4 text-center lg:text-left"
                >
                  {additional.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <button className="max-w-fit mt-8 text-sm lg:text-base lg:mt-0 hover:scale-95 duration-300 bg-page text-white py-3 px-6 rounded-lg shadow-md font-semibold">
        Aplikuj teraz
      </button>
    </div>
  );
}
