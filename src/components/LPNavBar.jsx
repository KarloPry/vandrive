"use client";

import { clsx } from 'clsx'
import React, { useState } from 'react';
import Image from 'next/image'
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import ProfileClient from '../../components/ProfileClient';

const Navbar2Defaults = {
  logo: {
    src: "/logo-letters.svg",
    alt: "Logo",
  },
  links: [
    { title: "Patrocinadores", url: "#Sponsors" },
    { title: "Planes", url: "#Pricing" },
    { title: "Testimonios", url: "#Testimonials" },
    { title: "Contacto", url: "#Contact" },
  ],
  buttons: [
    {
      title: "Ingresar",
      size: "sm",
    },
    {
      title: "Registrarse",
      size: "sm",
      variant: "outline",
    }
  ],
};

export default function LPNavBar  (props)  {
  const { logo, links, buttons } = {
    ...Navbar2Defaults,
    ...props,
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-[3px] bg-white transition ease-in-out transform duration-300 lg:hidden`;
  
  const handleLoginButtonClick = () => {
    window.location.assign("/api/auth/login");
  };

  const handleLogoutButtonClick = (e) => {
    window.location.assign("/api/auth/logout");
  };

  return (
    <nav className="flex h-auto min-h-16 w-full items-center bg-black px-[5%] lg:min-h-18 fixed top-0">
      <div className="mx-auto flex size-full auto-cols-fr items-center justify-between gap-4 lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr]">
        <div className="flex min-h-16 flex-shrink-0 items-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={40}
          />
        </div>
        <ul
          className={clsx(
            "absolute left-0 top-16 flex h-dvh w-full flex-col items-center justify-start border-b border-border-primary bg-black px-[5%] pt-4 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:border-none lg:px-0 lg:pt-0 text-white",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
          {links.map((link, index) => (
            <li key={`${link.title}-${index}`} className="w-full lg:w-auto">
              {link.subLinks && link.subLinks.length > 0 ? (
                <NavItemDropdown subLinks={link.subLinks} title={link.title} />
              ) : (
                <a
                  href={link.url}
                  className="relative block py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex min-h-16 items-center justify-end gap-x-4">
          <div>
            {buttons.map((button, index) => (
              <Button
              key={`${button.title}-${index}`}
              variant={button.variant}
              size={button.size}
              className="px-4 py-1 md:px-6 md:py-2 text-white hover:bg-orange-300 hover:text-black rounded-lg"
              onClick={button.title === "Ingresar" ? handleLoginButtonClick : handleLogoutButtonClick}
            >
                {button.title}
              </Button>
            ))}
          </div>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "translate-y-2 -rotate-45")}
            />
            <div className={clsx(genericHamburgerLine, mobileMenuOpen && "opacity-0")} />
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "-translate-y-2 rotate-45")}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItemDropdown = ({ title, subLinks }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-center gap-2 py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span>{title}</span>
        <AnimatePresence>
          <motion.div
            animate={dropdownOpen ? "rotated" : "initial"}
            variants={{
              rotated: { rotate: 180 },
              initial: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <SolidChevronDown className="size-4" />
          </motion.div>
        </AnimatePresence>
      </button>
      {dropdownOpen && (
        <AnimatePresence>
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: "var(--opacity-from, 100%)",
                y: "var(--slide-from, 25%)",
              },
              visible: {
                opacity: 1,
                y: "var(--slide-to, 0%)",
              },
            }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="border-border-primary bg-white [--slide-from:0%] lg:absolute lg:h-auto lg:border lg:p-2 lg:[--opacity-from:0%] lg:[--slide-from:25%]"
          >
            {subLinks.map((subLink, index) => (
              <li
                key={`${subLink.title}-${index}`}
                className="relative whitespace-nowrap py-3 text-center align-top text-base lg:px-4 lg:py-2 lg:text-left"
              >
                <a
                  href={subLink.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {subLink.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
      <ProfileClient/>
    </div>
  );
};