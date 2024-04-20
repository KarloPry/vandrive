"use client";

import Image from "next/image";

const Footer7Defaults = {
  image: {
    src: "svg-van-drive.svg",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
      ],
    },
  ],
  footerText: "© 2024 Relume. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};

function LPFooter(props) {
  const { image, footerText, columnLinks, footerLinks } = {
    ...Footer7Defaults,
    ...props,
  };
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          <div className="mb-8">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={40}
            />
          </div>
          {columnLinks.map((column, index) => (
            <ul
              key={`column-${index}`}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={`${link.title}-${linkIndex}`} className="font-semibold">
                  <a
                    href={link.url}
                    className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-between pt-6 text-center text-sm md:flex-row md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={`${link.title}-${index}`}
                className="underline decoration-black underline-offset-1"
              >
                <a
                  href={link?.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export { LPFooter };
