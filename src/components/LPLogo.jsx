"use client";

import { ImageProps } from "@relume_io/relume-ui";

const Logo3Defaults = {
  heading: "Used by the world's most average companies",
  images: [
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 1" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 2" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 3" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 3" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 4" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 4" },
  ],
};

const LPLogo = (props) => {
  const { heading, images } = {
    ...Logo3Defaults,
    ...props,
  };
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2] text-black">
          {heading}
        </h1>
      </div>
      <div className="flex items-center pt-[28px] md:pt-0">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex shrink-0 animate-loop-horizontally items-center">
              {images.map((logo, index) => (
                <img
                  key={`${logo.alt}-${index}`}
                  className="mx-[28px] max-h-12 shrink-0 md:mx-10 md:max-h-14"
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export { LPLogo };