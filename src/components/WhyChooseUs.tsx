"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section className="relative py-28 sm:py-32 lg:py-40 bg-white overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-24"
        >
          <span className="block mb-4 text-xs uppercase tracking-[0.4em] text-neutral-400">
            Why Choose Midis
          </span>

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-[50px] lg:text-[62px] font-semibold tracking-tight leading-[1.05]"
          >
            Built for{" "}
            <span className="text-orange-500">Growth</span>
            <br />
            <span className="text-neutral-700 font-normal">
              Not Empty Promises
            </span>
          </motion.h2>

          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Anyone can offer services. We build long-term partnerships focused on
            clarity, performance, and measurable outcomes.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-32">
          {reasons.map((item, index) => {
            const reverse = index % 2 !== 0;
            const fromX = reverse ? 140 : -140;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: fromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center"
              >
                {/* TEXT */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <span className="text-xs uppercase tracking-[0.35em] text-orange-500">
                    {item.eyebrow}
                  </span>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE */}
                <motion.div
                  className="
                    relative
                    rounded-3xl
                    overflow-hidden
                    bg-neutral-100
                    shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)]
                  "
                  whileHover={!isMobile ? { scale: 0.97 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
                    whileHover={!isMobile ? { scale: 1.08 } : {}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
