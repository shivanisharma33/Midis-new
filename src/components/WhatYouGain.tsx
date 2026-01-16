"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* ================= DATA ================= */

const benefits = [
  {
    title: "Experience Across Borders",
    description:
      "We understand what works globally and tailor strategies for different markets.",
  },
  {
    title: "All-in-One Solutions",
    description:
      "No need to manage multiple agencies — everything is handled under one roof.",
  },
  {
    title: "Clear Communication",
    description:
      "No jargon, no confusion. Just clear insights and actionable results.",
  },
  {
    title: "Scalable Growth Strategies",
    description:
      "Our strategies are designed to evolve and grow with your business.",
  },
];

/* ================= COMPONENT ================= */

const WhatYouGain = () => {
  return (
    <section className="relative py-24 sm:py-28 bg-white overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10 bg-neutral-50" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="block text-xs uppercase tracking-[0.35em] text-neutral-400 mb-4">
            Partnership That Delivers
          </span>

          <h2 className="text-[38px] sm:text-[46px] lg:text-[54px] font-semibold tracking-tight leading-[1.05]">
            What You’ll Gain With{" "}
            <span className="text-orange-500">Midis</span>
          </h2>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            When you work with Midis, you’re not just outsourcing tasks —
            you’re building a long-term partnership focused on real growth.
          </p>
        </motion.div>

        {/* ================= BENEFITS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                p-7
                rounded-2xl
                bg-gradient-to-br from-white via-neutral-50 to-white
                ring-1 ring-neutral-200/60
                hover:ring-orange-500/40
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_25px_50px_-25px_rgba(0,0,0,0.25)]
              "
            >
              {/* Icon + Title */}
              <div className="mb-5 flex items-center gap-4">
                <div
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-orange-500/10
                    flex items-center justify-center
                    group-hover:bg-orange-500/15
                    transition-colors
                  "
                >
                  <Check className="w-5 h-5 text-orange-500" />
                </div>

                <h4 className="text-lg font-medium text-neutral-900">
                  {item.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;
