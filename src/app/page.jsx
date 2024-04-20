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
          logo = {{
            src: "/logo-letters.svg",
            alt: "Logo",
          }}
          links = {[
            { title: "Sponsors", url: "#Sponsors" },
            { title: "Pricing Plans", url: "#Pricing" },
            { title: "Testimonials", url: "#Testimonials" },
            { title: "Contact Us", url: "#Contact" },
          ]}
          buttons = {[
            {
              title: "Log In",
              size: "sm",
              onClick: handleLoginButtonClick,
            },
            {
              title: "Sign Up",
              size: "sm",
              variant: "outline",
              onClick: handleLogoutButtonClick,
            }
          ]}
        />
        <Vanlejandro/>
        <LPHeader
          heading = {"Who we are?"}
          description =
            {"We offer a service that allows companies with remote workers to reduce commuting times and enhance security. Our solution includes an employee registration and management system, as well as security measures for sensitive documents or possibly for specific access in a data center."}
        />
        <LPLogo
          heading = {"Official Sponsors"}
        />
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-blue-950">Pricing Plans</h1>
        </div>
        <DCardPricingEN/>
        <LPTestimonial
          heading = {"Customer testimonials"}
          description = {"At VanDrive, we pride ourselves on providing exceptional service that not only meets, but exceeds our customers' expectations."}
          testimonials = {[
            {
              testimonial:
                "As the person responsible for coordinating the transportation of our staff to important events and meetings, I always look for efficiency and reliability. VanDrive not only met these expectations, but exceeded them. Their professionalism and punctuality made our travels stress-free and allowed us to focus on what really matters: our work.",
              avatar: {
                src: "/phprof1.jpeg",
                alt: "Avatar testimony 1",
              },
              name: "Ana M.",
              position: "Human Resources Manager",
              numberOfStars: 5,
            },
            {
              testimonial:
                "Incredible transfer service! I felt like a VIP on every trip. The drivers were friendly, the vehicles were spotless and the punctuality was impeccable.",
              avatar: {
                src: "/phprof2.jpeg",
                alt: "Avatar testimony 2",
              },
              name: "Juan C.",
              position: "Satisfied Employee",
              numberOfStars: 5,
            },
            {
              testimonial:
                "The logistics of moving our team between locations was always a challenge, until we found VanDrive. Their team made everything easy and hassle free, thank you for your excellent service!",
              avatar: {
                src: "/phprof3.jpeg",
                alt: "Avatar testimony 3",
              },
              name: "Mario G.",
              position: "Chief Executive Officer",
              numberOfStars: 5,
            },
          ]}
        />
        <LPContactUS
          heading = {"Contact Us"}
          description = {"At VanDrive, we value direct communication and are ready to answer any questions you may have about our personnel relocation services."}
          contacts = {[
            {
              icon: <BiEnvelope className="size-12" />,
              title: "Email",
              description:
                "Send us an email and we will get back to you as soon as possible.",
              link: {
                label: "jcostas29@alumnos.uaq.mx",
                url: "#",
              },
            },
            {
              icon: <BiMessageDetail className="size-12" />,
              title: "Live Chat",
              description:
                "Chat with us in real time.",
              link: {
                label: "Start chat",
                url: "#",
              },
            },
            {
              icon: <BiPhone className="size-12" />,
              title: "Phone",
              description:
                "Call now for immediate assistance.",
              link: {
                label: "+52 1 442 133 3617",
                url: "#",
              },
            },
            {
              icon: <Location className="size-12" />,
              title: "Offices",
              description:
                "Find us at our main office.",
              link: {
                label: "Av. de las Ciencias S/N, 76230 Juriquilla, Qro.",
                url: "https://maps.app.goo.gl/AoQsrPCjgG8Vy3dy7",
              },
            },
          ]}
        />
        <LPFooter
          footerText = {"© 2024 315-150. All rights reserved."}
          footerLinks = {[
            { title: "Privacy Policy", url: "#" },
            { title: "Terms of Service", url: "#" },
            { title: "Cookies Settings", url: "#" },
          ]}
        />
    </>
  )
}

export default Page