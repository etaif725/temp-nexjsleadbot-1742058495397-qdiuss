"use client";

import acmeLogo from "../../../public/icons/logo-acme.svg";
import quantumLogo from "../../../public/icons/logo-quantum.svg";
import echoLogo from "../../../public/icons/logo-echo.svg";
import celestialLogo from "../../../public/icons/logo-celestial.svg";
import pulseLogo from "../../../public/icons/logo-pulse.svg";
import apexLogo from "../../../public/icons/logo-apex.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="max-w-screen-md w-full mx-auto px-4 py-8 gap-12 md:px-8 flex flex-col justify-center items-center">
      <motion.h2
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-light tracking-tighter sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text text-pretty pt-12"
      >
        Trusted by SMBs across 9+ niches
      </motion.h2>
      <div className="flex overflow-hidden w-[75vw] md:w-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14" 
          animate={{
          translateX: "-50%",
          }}
          transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          }}
        >
          <Image src={acmeLogo} alt="Acme logo" className="invert" />
          <Image src={quantumLogo} alt="Acme logo" className="invert" />
          <Image src={echoLogo} alt="Acme logo" className="invert" />
          <Image src={celestialLogo} alt="Acme logo" className="invert" />
          <Image src={pulseLogo} alt="Acme logo" className="invert" />
          <Image src={apexLogo} alt="Acme logo" className="invert" />

          {/* 2nd set of logos for animation only */}
          <Image src={acmeLogo} alt="Acme logo" className="invert" />
          <Image src={quantumLogo} alt="Acme logo" className="invert" />
          <Image src={echoLogo} alt="Acme logo" className="invert" />
          <Image src={celestialLogo} alt="Acme logo" className="invert" />
          <Image src={pulseLogo} alt="Acme logo" className="invert" />
          <Image src={apexLogo} alt="Acme logo" className="invert" />
        </motion.div>
      </div>
  </section>
  );
};