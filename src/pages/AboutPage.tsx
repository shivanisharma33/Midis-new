"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import aboutImg from "../assets/Futuristic VR Experience (1).png";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ReasonsSection from "../components/ReasonsSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

/* ================= TEXT REVEAL ANIMATION ================= */

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textLine = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Image zoom on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <>
      <Navbar />

      {/* ================= INTERACTIVE GRID HERO ================= */}
   {/* ================= INTERACTIVE GRID HERO ================= */}
<section ref={heroRef} className="relative h-[200vh] bg-black">
  <div className="sticky top-0 h-screen overflow-hidden">

    {/* FULL WIDTH IMAGE */}
    <motion.div
      style={{ scale, opacity }}
      className="absolute inset-0"
    >
      <img
        src={aboutImg}
        alt="About visual"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </motion.div>

    {/* CENTERED CONTENT */}
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="px-6 sm:px-10 max-w-3xl text-center">

        {/* TEXT REVEAL HEADLINE */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <motion.h1
            variants={textLine}
            className="
              text-white font-semibold
              text-[clamp(48px,6.5vw,96px)]
              leading-[1.05]
            "
          >
            A Creative Studio
          </motion.h1>

          <motion.h1
            variants={textLine}
            className="
              text-white font-semibold
              text-[clamp(48px,6.5vw,96px)]
              leading-[1.05]
            "
          >
            Global Mindset.
          </motion.h1>
        </motion.div>

        {/* CTA */}
        <div className="mt-14 flex justify-center gap-10">
          <button className="text-sm text-white font-medium border-b border-white/40 pb-1 hover:border-white transition">
            Start a Project
          </button>

          <button className="text-sm text-white/60 hover:text-white transition">
            Meet the Team →
          </button>
        </div>

      </div>
    </div>

    {/* SCROLL INDICATOR */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
      SCROLL
    </div>
  </div>
</section>


      {/* ================= REST OF PAGE ================= */}
      <section className="w-full bg-white px-8 lg:px-20 py-28">
        <AboutSection />
      </section>

      <TeamSection />
      <ReasonsSection />
      <Services />
      <Footer />
    </>
  );
};

export default AboutPage;
