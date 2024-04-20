"use client";

import Image from "next/image";
import { Star } from "@relume_io/relume-ui";

const Testimonial17Defaults = {
  heading: "Testimonios de clientes",
  description: "En VanDrive, nos enorgullece brindar un servicio excepcional que no solo cumple, sino que supera las expectativas de nuestros clientes.",
  testimonials: [
    {
      testimonial:
        "Como responsable de coordinar el traslado de nuestro personal a eventos y reuniones importantes, siempre busco eficiencia y confiabilidad. VanDrive no solo cumplió con estas expectativas, sino que las superó. Su profesionalismo y puntualidad hicieron que nuestros viajes fueran sin estrés y nos permitieron centrarnos en lo que realmente importa: nuestro trabajo.",
      avatar: {
        src: "/phprof1.jpeg",
        alt: "Avatar testimonio 1",
      },
      name: "Ana M.",
      position: "Gerente de Recursos Humanos",
      numberOfStars: 5,
    },
    {
      testimonial:
        "¡Increíble servicio de traslado! Me sentí como un VIP en cada viaje. Los conductores fueron amables, los vehículos estaban impecables y la puntualidad fue impecable.",
      avatar: {
        src: "/phprof2.jpeg",
        alt: "Avatar testimonio 2",
      },
      name: "Juan C.",
      position: "Empleado Satisfecho",
      numberOfStars: 5,
    },
    {
      testimonial:
        "La logística de trasladar a nuestro equipo entre sedes siempre fue un desafío, hasta que encontramos a VanDrive. Su equipo hizo que todo fuera fácil y sin complicaciones. ¡Gracias por su excelente servicio!",
      avatar: {
        src: "/phprof3.jpeg",
        alt: "Avatar testimonio 3",
      },
      name: "Mario G.",
      position: "Director Ejecutivo",
      numberOfStars: 5,
    },
  ],
};

function LPTestimonial (props) {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  };
  return (
    <section id="Testimonials" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20 text-blue-950">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.testimonial}-${index}`}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8 text-blue-950"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <Star key={starIndex} className="mr-1 size-6 text-orange-300" />
                    ))}
                </div>
                <blockquote className={`before:content-['"'] after:content-['"'] md:text-md`}>
                  {testimonial.testimonial}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                {/* <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                /> */}
                <Image
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  width={48}
                  height={48}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    {testimonial.position} {testimonial.companyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LPTestimonial };