import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import aboutImg from "../assets/Futuristic VR Experience (1).png";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ReasonsSection from "../components/ReasonsSection";
import Footer from "@/components/Footer";


import Services from "@/components/Services";

const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Image zoom
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // 👉 Bottom-right text animation
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [40, 0]);

  return (
    <>
      <Navbar />

      {/* ================= HERO ZOOM SECTION ================= */}
      <section ref={heroRef} className="relative h-[200vh] w-full bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.img
            src={aboutImg}
            alt="About Hero"
            style={{ scale, opacity }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Main Title */}
          <div className="relative z-10 flex h-full items-center px-8 lg:px-20">
            <h1 className="text-white text-[64px] md:text-[88px] lg:text-[110px] font-bold tracking-tight leading-none">
              ABOUT US
            </h1>
          </div>

          {/* 👉 BOTTOM RIGHT SCROLL TEXT */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute bottom-10 right-8 lg:right-20 z-20 max-w-sm"
          >
            <p className="text-white/90 text-sm leading-relaxed">
              We design immersive digital experiences that blend creativity,
              technology, and strategy — shaping brands that feel futuristic,
              bold, and unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

  

      <section className="w-full bg-white px-8 lg:px-20 py-28">
        <AboutSection />
      </section>
      <TeamSection />
          {/* WHY CHOOSE MIDIS (GSAP SECTION) */}
  <ReasonsSection />
 
      <Services />
       <Footer />
    </>
  );
};

export default AboutPage;
