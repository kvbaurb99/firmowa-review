import React from "react";
import Image from "next/image";
import CmsImage from "../../assets/about/Group.svg";
import SeoImage from '../../assets/about/seo-image.svg'
import AffilImage from '../../assets/about/affil-image.svg'
import LinkImage from '../../assets/about/link-image.svg'
import Leaf from "../../assets/about/leaf-two-about.svg";

type Props = {
  inView: boolean;
};

export default function LeftSection({ inView }: Props) {
  return (
    <div className="col-span-2 flex flex-col lg:grid grid-cols-2 gap-4 2xl:gap-6 lg:relative bottom-20 w-full">
      <div className={`about-window ${inView ? "animation-window" : ""}`}>
        <figure className="bg-page max-w-fit p-4 rounded-full">
          <Image src={CmsImage} width={35} height={35} alt="title" />
        </figure>
        <h3 className="font-bold text-xl mt-4">
          Budowanie dedykowanych stron www/CMS{" "}
        </h3>
        <p className="mt-2 inter">
          Tworzymy dedykowane systemy CMS zaprojektowane dla maksymalnej
          wydajności i optymalizacji.
        </p>
      </div>
      <div className={`${inView ? "animation-window-two" : ""} about-window lg:relative lg:top-12`}>
        <figure className="bg-page max-w-fit p-4 rounded-full">
          <Image src={SeoImage} width={35} height={35} alt="title" />
        </figure>
        <h3 className="font-bold text-xl mt-4">
          SEO (Search Engine Optimization){" "}
        </h3>
        <p className="mt-2 inter">
          Zwiększenie ruchu na stronie poprzez poprawę jej widoczności dla
          użytkowników, którzy wyszukują określone frazy kluczowe z daną
          tematyką.
        </p>
      </div>
      <div className={`about-window ${inView ? "animation-window-three" : ""} relative z-20`}>
        <div className="absolute top-0 left-0 w-full h-full bg-white z-20 rounded-xl" />
        <div className="relative z-20">
          <figure className="bg-page max-w-fit p-4 rounded-full">
            <Image src={AffilImage} width={35} height={35} alt="title" />
          </figure>
          <h3 className="font-bold text-xl mt-4">Afilacja</h3>
          <p className="mt-2 inter">
            Zwiększamy pozycje i maksymalizujemy konwersje, przesyłając
            najwyższej jakości traffic do programów partnerskich.
          </p>
        </div>
        <Image
          src={Leaf}
          width={145}
          height={145}
          loading="lazy"
          alt="leaf"
          className={`absolute ${
            inView ? "animation-from-right" : ""
          } -bottom-0 -left-24 -z-40 hidden lg:block`}
        />
      </div>
      <div className={`about-window ${inView ? "animation-window-four" : ""} lg:relative top-12`}>
        <figure className="bg-page max-w-fit p-4 rounded-full">
          <Image src={LinkImage} width={35} height={35} alt="title" />
        </figure>
        <h3 className="font-bold text-xl mt-4">Linkbuilding </h3>
        <p className="mt-2 inter">
          Profesjonalne usługi publikacji artykułów sponsorowanych, które
          wzmacniają profil linków zwrotnych i autorytet domen klientów.
        </p>
      </div>
    </div>
  );
}
