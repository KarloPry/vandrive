"use client";

import { Button } from "@relume_io/relume-ui";

const Header1Defaults = {
  heading: "¿Quienes somos?",
  description:
    "Ofrecemos un servicio que permite a empresas con trabajadores remotos reducir los tiempos de desplazamiento y mejorar la seguridad. Nuestra solución incluye un sistema de registro y gestión de empleados, así como medidas de seguridad para documentos sensibles o tal vez a accesos especificos en un data center.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "/Map.svg",
    alt: "Placeholder image",
  },
};

export const LPHeader = (props) => {
  const { heading, description, buttons, image } = {
    ...Header1Defaults,
    ...props,
  };
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md text-justify">{description}</p>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </header>
  );
};