import React from "react";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-page py-12">
      <div className="page-sizing flex-col lg:flex-row flex lg:justify-between items-center text-white">
        <div className="flex flex-col gap-4 max-w-xl text-center lg:text-left">
          <h2 className="font-bold text-3xl">WebLeaders</h2>
          <p>
            Specjalizujemy się w optymalizacji stron internetowych w celu
            poprawy ich widoczności w wynikach wyszukiwania organicznego.
          </p>
          <span className="hidden lg:block">© WebLeaders.pl 2024</span>
        </div>
        <ul className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-4 font-semibold">
          <li className="flex lg:hidden gap-2 items-center my-4">
            <Image src={Facebook} width={35} height={20} alt="facebook" />
            <Image src={Linkedin} width={35} height={20} alt="linkedin" />
          </li>
          <li>Polityka prywatności</li>
          <li className="hidden lg:block">|</li>
          <li>
            <a href="mailto:kontakt@webleaders.pl">kontakt@webleaders.pl</a>
          </li>
          <li className="hidden lg:flex gap-2 items-center ml-4">
            <Image src={Facebook} width={35} height={20} alt="facebook" />
            <Image src={Linkedin} width={35} height={20} alt="linkedin" />
          </li>
        </ul>
        <span className="lg:hidden mt-4">© WebLeaders.pl 2024</span>
      </div>
    </footer>
  );
}
