"use client";
import React, { useState, useCallback } from "react";
import MenuIcon from "../../assets/menu.svg";
import Image from "next/image";
import Menu from "../Mobile/Menu/Menu";
import { useNavBackground } from "../Hooks/useNavBackground";

export default function Navbar() {
  const navBackground = useNavBackground();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-20 py-8 ${
          navBackground ? "bg-white/60 backdrop-blur-lg" : ""
        }`}
      >
        <div className="flex items-center justify-between page-sizing">
          <figure className="text-gradient text-3xl font-semibold">
            WebLeaders
          </figure>
          <ul className="hidden lg:flex items-center gap-8 lg:font-semibold lg:text-lg">
            <li className="hover-text">
              <a href="#about">Czym się zajmujemy ?</a>
            </li>
            <li className="hover-text">
              <a href="#projects">Nasze projekty</a>
            </li>
            <li className="hover-text">
              <a href="#achiev">Osiągnięcia</a>
            </li>
            <li className="hover-text">
              <a href="#offers">Rekrutacja</a>
            </li>
            <li className="hover-text">
              <button className="bg-page text-white font-semibold px-6 py-2.5 rounded-lg">
                <a href="#contact">Kontakt</a>
              </button>
            </li>
          </ul>
          <figure onClick={() => setMenuOpen(true)} className="lg:hidden">
            <Image src={MenuIcon} width={25} height={25} alt="mobile_menu" />
          </figure>
        </div>
      </nav>
      {menuOpen ? <Menu handleClick={handleCloseMenu} /> : null}
    </>
  );
}
