"use client";

import { BiEnvelope, BiMessageDetail, BiPhone } from "react-icons/bi";
import { Location } from "@relume_io/relume-ui";

const Contact24Defaults = {
  tagline: "",
  heading: "Contáctanos",
  description: "En VanDrive, valoramos la comunicación directa y estamos listos para responder cualquier pregunta que tengas sobre nuestros servicios de traslado de personal.",
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Envíanos un correo y te responderemos lo más pronto posible",
      link: {
        label: "jcostas29@alumnos.uaq.mx",
        url: "#",
      },
    },
    {
      icon: <BiMessageDetail className="size-12" />,
      title: "Chat en vivo",
      description:
        "Chatea con nosotros en tiempo real.",
      link: {
        label: "Iniciar chat",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Teléfono",
      description:
        "Llama ahora para asistencia inmediata.",
      link: {
        label: "+52 1 442 133 3617",
        url: "#",
      },
    },
    {
      icon: <Location className="size-12" />,
      title: "Oficinas",
      description:
        "Encuéntranos en nuestra oficina principal.",
      link: {
        label: "Av. de las Ciencias S/N, 76230 Juriquilla, Qro.",
        url: "https://maps.app.goo.gl/AoQsrPCjgG8Vy3dy7",
      },
    },
  ],
};

function LPContactUS(props) {
  const { tagline, heading, description, contacts } = {
    ...Contact24Defaults,
    ...props,
  };
  return (
    <section id="Contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-blue-950">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={`${contact.title}-${index}`}>
              <div className="mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a
                className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                href={contact.link.url}
              >
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LPContactUS };