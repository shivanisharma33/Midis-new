"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ================= DATA ================= */

const reasons = [
  {
    image:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Global Perspective",
    title: "Strategies Built for Different Markets",
    description:
      "We understand how people behave online across cultures. That’s why our strategies adapt — they’re never copied or recycled.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Return on Investment",
    title: "Growth Over Vanity Metrics",
    description:
      "We don’t celebrate likes or impressions. We focus on leads, conversions, sales, and measurable revenue growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "True Collaboration",
    title: "A Team That Works With You",
    description:
      "We don’t disappear after sending reports. We collaborate closely and adjust strategy as the market shifts.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a07c8e09898fa9493b1bbc_Modern%20Elegance%20Tech%20%26%20Texture.webp",
    eyebrow: "Ideas + Data",
    title: "Creative Thinking Backed by Data",
    description:
      "We love bold ideas — but numbers keep us grounded. Creativity and performance work together here.",
  },
];

/* ================= COMPONENT ================= */

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /**
   * 🎯 DELAYED START
   * - First 20% scroll → NO horizontal movement
   * - After that → horizontal animation begins
   */
  const x = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["0%", `-${(reasons.length - 1) * 25}%`]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${reasons.length * 120}vh` }}
    >
      {/* ================= HEADER ================= */}
 <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-10">
  {/* Eyebrow */}
  <motion.span
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="block mb-4 text-xs uppercase tracking-[0.4em] text-black/60"
  >
    Why Choose Midis
  </motion.span>

  {/* Heading */}
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.08,
        },
      },
    }}
    className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tight leading-[1.05] text-black"
  >
    {[
      <>Built for <span className="text-orange-500">Growth</span></>,
      <>Not Empty Promises</>,
    ].map((line, i) => (
      <div key={i} className="overflow-hidden">
        <motion.span
          variants={{
            hidden: { y: "100%" },
            visible: {
              y: "0%",
              transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className={`block ${
            i === 1 ? "font-normal text-black" : ""
          }`}
        >
          {line}
        </motion.span>
      </div>
    ))}
  </motion.h2>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    className="mt-6 text-lg text-black/70 max-w-2xl"
  >
    Anyone can offer services. We build long-term partnerships focused on
    clarity, performance, and measurable outcomes.
  </motion.p>
</div>


      {/* ================= INTRO SPACER (STATIC VIEW) ================= */}
      <div className="h-[10vh] bg-white" />

      {/* ================= STICKY HORIZONTAL SLIDER ================= */}
      <div className="sticky top-32 h-[75vh] flex items-center overflow-hidden bg-white">
        <motion.div style={{ x }} className="flex gap-20 px-[5vw]">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="w-[75vw] max-w-[820px] flex-shrink-0"
            >
              {/* CARD */}
              <div
                className="
                  group
                  relative
                  rounded-[30px]
                  overflow-hidden
                  bg-white
                  border
                  border-neutral-200/60
               
                  transition-all
                  duration-700
                ]
                "
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      absolute inset-0 w-full h-full object-cover
                      transition-transform duration-[1000ms] ease-out
                      group-hover:scale-[1.06]
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <span className="absolute bottom-8 left-8 text-[11px] uppercase tracking-[0.45em] text-white/90 font-medium">
                    {item.eyebrow}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="px-12 py-14">
                  <div className="mb-6 h-[2px] w-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
                  <h3 className="text-[28px] sm:text-[32px] font-semibold tracking-tight text-neutral-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-[17px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-[90%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
