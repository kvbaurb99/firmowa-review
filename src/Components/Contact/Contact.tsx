"use client";
import React, { useState } from "react";
import VectorFile from "../../assets/vector-file.svg";
import VectorHands from "../../assets/contact/vector-hands.svg";
import VectorFlower from "../../assets/about/leaf-three-about.svg";
import ContactLeaf from "../../assets/contact/contact-leaf.svg";
import Image from "next/image";
import { formatPhoneNumber } from "@/functions/formatPhoneNumber";
import DrawVector from "../../assets/draw-vector.svg";
import { sendMail } from "@/functions/sendEmalil";
import Success from "../Popup/Success";

export default function Contact() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    fileName: "",
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as any);
        setFormData({ ...formData, fileName: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value.replace("+48", "").trim();

    const formattedNumber = formatPhoneNumber(newPhoneNumber);

    setFormData({ ...formData, phone: formattedNumber });
  };

  return (
    <>
      <section
        id="contact"
        className="w-full relative pt-16 lg:pt-20 pb-16 lg:pb-32"
      >
        <div className="page-sizing">
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <span className="text-gradient font-semibold text-lg lg:text-xl">
                Kontakt
              </span>
              <h2 className="font-bold text-4xl lg:text-5xl leading-snug text-center">
                Skontaktuj się z nami w razie jakichkolwiek pytań
              </h2>
            </div>
            <form
              onSubmit={(e) =>
                sendMail(e, formData, selectedFile).then(() => {
                  setIsSuccess(true);
                  setFormData({
                    name: "",
                    email: "",
                    message: "",
                    phone: "",
                    fileName: "",
                  });
                })
              }
              className="w-full mt-16 lg:mt-24 flex flex-col gap-8 lg:gap-4"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
                <label className="flex flex-col gap-3 w-full">
                  <span className="font-bold text-lg lg:text-xl">Imię</span>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    name="name"
                    placeholder="Wpisz swoje imię bądź nazwę firmy"
                    type="text"
                    className="contact-input"
                  />
                </label>
                <label className="flex flex-col gap-3 w-full">
                  <span className="font-bold text-lg lg:text-xl">Telefon</span>
                  <input
                    required
                    value={`+48 ${formData.phone}`}
                    onChange={handleChangePhone}
                    placeholder="Wpisz numer kontaktowy"
                    type="tel"
                    className="contact-input"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-3 w-full">
                <span className="font-bold text-lg lg:text-xl">E-mail</span>
                <input
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  name="email"
                  placeholder="Podaj adres e-mail"
                  type="email"
                  className="contact-input"
                />
              </label>
              <label className="flex flex-col gap-3 w-full">
                <span className="font-bold text-lg lg:text-xl">Wiadomość</span>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  name="message"
                  placeholder="Napisz do nas wiadomość"
                  rows={10}
                  cols={15}
                  className="contact-input resize-none"
                ></textarea>
              </label>
              <div className="flex items-center gap-4">
                <label className="max-w-fit bg-white py-3 px-8 flex items-center gap-2.5 border-[#A1A1A1]/50 border rounded-lg font-semibold">
                  <Image
                    src={VectorFile}
                    width={20}
                    height={20}
                    alt="file_vector"
                  />
                  Dodaj plik
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </label>
                {formData.fileName ? (
                  <span className="text-sm">
                    dołączono plik {formData.fileName}
                  </span>
                ) : null}
              </div>
              <label className="flex items-start gap-4 mt-6">
                <input type="checkbox" required />
                <p>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                  WebLeaders Sp. z o.o. w celu prowadzenia rekrutacji na
                  aplikowane przeze mnie stanowisko.
                </p>
              </label>
              <button className="bg-page active:scale-95 duration-300 text-white font-semibold px-6 py-3 mt-6 rounded-lg text-lg">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
        <Image
          src={VectorHands}
          width={225}
          height={225}
          alt="vector-hands"
          className="absolute -top-20 right-16 2xl:right-56 hidden lg:block animation-fade-in"
        />
        <Image
          src={VectorFlower}
          width={150}
          height={150}
          alt="vector-flower"
          className="absolute -bottom-6 right-28 hidden lg:block"
        />
        <Image
          src={ContactLeaf}
          width={225}
          height={225}
          alt="vector-flower"
          className="absolute top-1/2 xl:left-0 2xl:left-12 hidden xl:block"
        />
        <Image
          src={DrawVector}
          width={200}
          height={200}
          alt="vector-flower"
          className="absolute top-1/3 rotate-180 right-6 2xl:right-32 hidden xl:block"
        />
      </section>
      {isSuccess ? (
        <Success setIsSuccess={setIsSuccess} isSuccess={isSuccess} />
      ) : null}
    </>
  );
}
