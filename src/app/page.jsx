"use client"
import { BiEnvelope, BiMessageDetail, BiPhone } from "react-icons/bi";
import { Location } from "@relume_io/relume-ui";

import DCardPricing from '@/components/DCardPricing'
import { LPContactUS } from '@/components/LPContactUs'
import { LPFooter } from '@/components/LPFooter'
import { LPLogo } from '@/components/LPLogo'
import LPNavBar from '@/components/LPNavBar'
import { LPTestimonial } from '@/components/LPTestimonial'
import Vanlejandro from '@/components/DHeader'
import React, { useEffect } from 'react'
import DCardPricingEN from "@/components/DCardPricingEN";
import { LPHeader } from "@/components/LPHeader";
import { getSession } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter()

  const handleLoginButtonClick = () => {
    window.location.assign("/api/auth/login");
  };

  const handleLogoutButtonClick = (e) => {
    window.location.assign("/api/auth/logout");
  };

  const DefineUser = async (email, user) => {
    try {

      const res = await fetch(`/api/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: user,
        }),
      });

      const resBody = await res.json();

      if (resBody.code === 200) {
        localStorage.setItem("id", resBody.data.id)
        localStorage.setItem("name", resBody.data.name)
        localStorage.setItem("email", resBody.data.email)
        localStorage.setItem("empresaId", resBody.data.empresaId)

        router.push('/dashboard')
      }

      if (resBody.code === 201) {
        // TODO: user exists but has no enterprice, send to enterprice registration
        localStorage.setItem("id", resBody.data.id)
        localStorage.setItem("name", resBody.data.name)
        localStorage.setItem("email", resBody.data.email)

        router.push('/plan')
      }

      if (resBody.code === 202) {
        // TODO: user created, send to enterprice registration
        localStorage.setItem("id", resBody.data.id)
        localStorage.setItem("name", resBody.data.name)
        localStorage.setItem("email", resBody.data.email)

        router.push('/plan')
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== undefined) {
      if (!user.email_verified) {
        // TODO: Send user to verify email or show popup to verify email

        console.log(user);
      }

      DefineUser(user.email, user.nickname);
    }
  }, [user])

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <LPNavBar
        logo={{
          src: "/logo-letters.svg",
          alt: "Logo",
        }}
        links={[
          { title: "Patrocinadores", url: "#Sponsors" },
          { title: "Planes de precio", url: "#Pricing" },
          { title: "Testimonios", url: "#Testimonials" },
          { title: "Contáctanos", url: "#Contact" },
        ]}
        buttons={[
          {
            title: "Inicio de sesión",
            size: "sm",
            onClick: handleLoginButtonClick,
          },
          {
            title: "Registráte",
            size: "sm",
            variant: "outline",
            onClick: handleLogoutButtonClick,
          }
        ]}
      />
      <Vanlejandro />
      <LPHeader
        heading={"¿Quiénes somos?"}
        description=
        {"Ofrecemos un servicio que permite a las empresas con trabajadores remotos reducir los tiempos de desplazamiento y mejorar la seguridad. Nuestra solución incluye un sistema de registro y gestión de empleados, así como medidas de seguridad para documentos sensibles o posiblemente para acceso específico en un centro de datos."}
      />
      <LPLogo
        heading={"Patrocinadores oficiales"}
      />
      <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-blue-950">Planes</h1>
      </div>
      <DCardPricingEN />
      <LPTestimonial
        heading={"Testimonios de clientes"}
        description={"En VanDrive, nos enorgullecemos de ofrecer un servicio excepcional que no solo cumple, sino que supera las expectativas de nuestros clientes."}
        testimonials={[
          {
            testimonial:
              "Como la persona responsable de coordinar el transporte de nuestro personal a eventos y reuniones importantes, siempre busco eficiencia y confiabilidad. VanDrive no solo cumplió con estas expectativas, sino que las superó. Su profesionalismo y puntualidad hicieron que nuestros viajes fueran libres de estrés y nos permitieron enfocarnos en lo que realmente importa: nuestro trabajo.",
            avatar: {
              src: "/phprof1.jpeg",
              alt: "Avatar testimony 1",
            },
            name: "Ana M.",
            position: "Gerente de recursos humanos",
            numberOfStars: 5,
          },
          {
            testimonial:
              "¡Increíble servicio de traslado! Me sentí como un VIP en cada viaje. Los conductores fueron amables, los vehículos estaban impecables y la puntualidad fue impecable.",
            avatar: {
              src: "/phprof2.jpeg",
              alt: "Avatar testimony 2",
            },
            name: "Juan C.",
            position: "Empleado satisfecho",
            numberOfStars: 5,
          },
          {
            testimonial:
              "La logística de mover a nuestro equipo entre ubicaciones siempre fue un desafío, hasta que encontramos VanDrive. Su equipo hizo todo fácil y sin complicaciones, ¡gracias por su excelente servicio!",
            avatar: {
              src: "/phprof3.jpeg",
              alt: "Avatar testimony 3",
            },
            name: "Mario G.",
            position: "Director ejecutivo",
            numberOfStars: 5,
          },
        ]}
      />
      <LPContactUS
        heading={"Contact Us"}
        description={"En VanDrive, valoramos la comunicación directa y estamos listos para responder cualquier pregunta que pueda tener sobre nuestros servicios de reubicación de personal."}
        contacts={[
          {
            icon: <BiEnvelope className="size-12" />,
            title: "Email",
            description:
              "Envíenos un correo electrónico y nos pondremos en contacto con usted lo antes posible.",
            link: {
              label: "jcostas29@alumnos.uaq.mx",
              url: "#",
            },
          },
          {
            icon: <BiMessageDetail className="size-12" />,
            title: "Chat en tiempo real",
            description:
              "Habla con nosotros en tiempo real.",
            link: {
              label: "Start chat",
              url: "#",
            },
          },
          {
            icon: <BiPhone className="size-12" />,
            title: "Phone",
            description:
              "Llame ahora para obtener asistencia inmediata.",
            link: {
              label: "+52 1 442 133 3617",
              url: "#",
            },
          },
          {
            icon: <Location className="size-12" />,
            title: "Offices",
            description:
              "Encuéntrenos en nuestra oficina principal.",
            link: {
              label: "Av. de las Ciencias S/N, 76230 Juriquilla, Qro.",
              url: "https://maps.app.goo.gl/AoQsrPCjgG8Vy3dy7",
            },
          },
        ]}
      />
      <LPFooter
        footerText={"© 2024 315-150. All rights reserved."}
        footerLinks={[
          { title: "Política de privacidad", url: "#" },
          { title: "Términos del servicio", url: "#" },
          { title: "Configuración de cookies", url: "#" },
        ]}
      />
    </>
  )
}

export default Page