"use client";

import Image from 'next/image'
import { Exo_2 } from "next/font/google";
const ExoFont = Exo_2({ subsets: ["latin"] });

const Logo3Defaults = {
  heading: "Patrocinadores oficiales",
  images: [
    { src: "/github.png", alt: "Webflow logo 1" },
    { src: "/auth0.png", alt: "Relume logo 1" },
    { src: "/mongodb.png", alt: "Webflow logo 2" },
    { src: "/saucelab.png", alt: "Relume logo 2" },
    { src: "/starknet.png", alt: "Webflow logo 3" },
    { src: "/tech-domains.png", alt: "Relume logo 3" },
    { src: "/tiny-mce.png", alt: "Webflow logo 4" },
  ],
};

const LPLogo = (props) => {
  const { heading, images } = {
    ...Logo3Defaults,
    ...props,
  };
  return (
    <section id="Sponsors" className="overflow-hidden py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className={ExoFont.className + " text-center text-2xl font-bold leading-[1.2] md:text-5xl md:leading-[1.2] text-blue-950"}>
          {heading}
        </h1>
      </div>
      <div className="flex items-center pt-[28px] md:pt-0">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex shrink-0 loop-scroll items-center gap-7">
              {images.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={10}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export { LPLogo };