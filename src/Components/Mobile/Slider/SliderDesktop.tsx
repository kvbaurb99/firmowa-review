import Image from "next/image";
import ImageOne from "../../../assets/portfolio/fotowoltaika.png";
import ImageBlog from "../../../assets/portfolio/blogcms.png";
import ImageBlogTwo from "../../../assets/portfolio/blogtwo.png";
import ImageMagro from "../../../assets/portfolio/magro.png";

type Props = {
  sliderRef: React.RefObject<HTMLDivElement>;
};

export default function SliderDesktop({ sliderRef }: Props) {
  return (
    <div
      ref={sliderRef}
      className="hidden lg:flex items-center lg:px-12 scrollbar-hide scroll-smooth overflow-x-scroll overflow-visible mt-12"
    >
      <div className="flex gap-8">
        <div className="h-full relative">
          <a href="https://fotowoltaika-pl.pl" target="_blank">
            <figure className="pt-4 bg-[#FDF2F2] rounded-xl shadow-lg w-[570px] h-[380px]">
              <Image
                src={ImageOne}
                width={1200}
                quality={100}
                height={400}
                alt="title"
                className="w-full h-full"
              />
            </figure>
          </a>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Fotowoltaika - pl</h3>
            <p className="text-sm inter">Landing page</p>
          </div>
        </div>
        <div className="h-full relative">
          <a href="https://edukacjakrytyczna.pl" target="_blank">
            <figure className="pt-4 bg-[#ECE2BB] rounded-xl shadow-lg w-[570px] h-[380px]">
              <Image
                src={ImageBlog}
                width={1200}
                quality={100}
                height={400}
                alt="title"
                className="w-full h-full"
              />
            </figure>
          </a>
          <div className="mt-4 space-y-1">
            <h3 className="font-bold text-lg">Edukacja krytyczna</h3>
            <p className="text-sm inter">Blog CMS</p>
          </div>
        </div>
        <div className="h-full relative">
          <a href="https://coimdac.pl" target="_blank">
            <figure className="pt-4 bg-[#8CD6D5] rounded-xl shadow-lg w-[570px] h-[380px]">
              <Image
                src={ImageBlogTwo}
                width={1200}
                quality={100}
                height={400}
                alt="title"
                className="w-full h-full"
              />
            </figure>
          </a>
          <div className="mt-4 ">
            <h3 className="font-bold text-lg">Coimdac.pl</h3>
            <p className="text-sm inter">Blog CMS</p>
          </div>
        </div>
        <div className="h-full relative">
          <a href="https://magro.info.pl" target="_blank">
            <figure className="pt-4 bg-[#9E9E9E] rounded-xl shadow-lg w-[570px] h-[380px]">
              <Image
                src={ImageMagro}
                width={1200}
                quality={100}
                height={400}
                alt="title"
                className="w-full h-full"
              />
            </figure>
          </a>
          <div className="mt-4">
            <h3 className="font-bold text-lg">
              Magro - przetwórstwo pieczarek
            </h3>
            <p className="text-sm inter">Landing page</p>
          </div>
        </div>
      </div>
    </div>
  );
}
