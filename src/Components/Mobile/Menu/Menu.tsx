import React from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/close-menu.svg";

type Props = {
  handleClick: () => void;
};

export default function Menu({ handleClick }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white py-8 px-4">
      <div className="flex justify-between">
        <span className="text-gradient text-3xl">WebLeaders</span>
        <Image
          onClick={handleClick}
          src={CloseIcon}
          width={25}
          height={25}
          alt="close_menu"
        />
      </div>
      <ul className="flex flex-col items-center gap-8 mt-16 text-2xl">
        <li>
          <a onClick={handleClick} href="#about">
            Czym się zajmujemy ?
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#projects">
            Nasze projekty
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#achiev">
            Osiągnięcia
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#offers">
            Rekrutacja
          </a>
        </li>
        <li>
          <button className="bg-page text-white px-8 py-2.5 rounded-lg text-lg">
            <a onClick={handleClick} href="#contact">
              Kontakt
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
