import React from "react";
import Confetti from "../../assets/confetti.svg";
import SuccessPerson from "../../assets/success-person.svg";
import Image from "next/image";

type Props = {
  isSuccess: boolean;
  setIsSuccess: (value: boolean) => void;
};

export default function Success({ isSuccess, setIsSuccess }: Props) {
  console.log(isSuccess);
  return (
    <div
      className={
        "fixed left-0 top-0 z-[1055] px-2 lg:px-0 flex justify-center items-center h-screen w-full overflow-y-auto overflow-x-hidden outline-none bg-black/80"
      }
      onClick={() => setIsSuccess(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        id="modal"
        className="relative justify-center lg:justify-start w-full lg:w-3/4 2xl:w-1/2 bg-white rounded-lg flex lg:py-16 py-8 flex-col items-center"
      >
        <div className="lg:pl-52 lg:pr-12 px-4 py-2 lg:py-0 flex flex-col lg:px-0 relative text-center lg:text-left">
          <span className="text-gradient lg:hidden font-semibold text-sm">
            Sukces
          </span>
          <span className="font-bold text-lg lg:text-3xl mt-1 lg:mt-0">
            Wiadomość została wysłana pomyślnie
          </span>
          <p className="lg:mt-2 mt-1 lg:mb-2 inter text-sm lg:text-base">
            Twoja wiadomośc zaraz do nas dotrze, a to oznacza, że ktoś z naszego
            zespołu odezwie się do Ciebie najszybciej jak to mozliwe!{" "}
          </p>
          <span className="text-gradient text-2xl hidden lg:block">
            WebLeaders
          </span>
        </div>
        <Image
          className="animation-confetti absolute lg:-top-32 xl:-top-44 left-0 z-20 hidden lg:block"
          src={Confetti}
          width={450}
          height={300}
          alt="cofetti"
        />
        <Image
          src={SuccessPerson}
          width={300}
          height={300}
          alt="cofetti"
          className="absolute lg:-top-32 2xl:-top-1/2 -left-32 animation-from-bottom hidden lg:block"
        />
      </div>
    </div>
  );
}
