"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, X, User, Tag } from "lucide-react";

/* ================= DATA ================= */

const steps = [
  {
    number: "01",
    title: " Experience across borders",
    description: "we know what works globally.",
    icon: Check,
  },
  {
    number: "02",
    title: "All-in-one solutions",
    description:
      " no need to hire five different agencies.",
    icon: X,
  },
  {
    number: "03",
    title: "Clear communication",
    description:
      "no jargon, just results explained simply.",
    icon: User,
  },
  {
    number: "04",
    title: "Growth strategies ",
    description: "designed to scale with your business.",
    icon: Tag,
  },
];

/* ================= COMPONENT ================= */

const WhatYouGain = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-black text-white"
    >
      {/* ================= STICKY WRAPPER ================= */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center">
  <div className="overflow-hidden">
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
      className="text-[42px] sm:text-[54px] lg:text-[64px] font-semibold leading-[1.05]"
    >
      {["What You’ll Gain", "With Midis"].map((line, i) => (
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
            className="block"
          >
            {line}
          </motion.span>
        </div>
      ))}
    </motion.h2>
  </div>
</div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const start = index / steps.length;
              const end = (index + 1) / steps.length;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.3, 1]
              );

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [40, 0]
              );

              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  className="
                    relative
                    flex
                    gap-6
                    p-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur
                  "
                >
                  {/* Number */}
                  <span className="text-white/40 text-sm font-medium">
                    {step.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white/70" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;
