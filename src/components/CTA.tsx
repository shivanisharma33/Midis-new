"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-neutral-950 py-28 lg:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-b
            from-white/[0.04]
            to-white/[0.01]
            px-10
            sm:px-16
            py-20
            text-center
            backdrop-blur
          "
        >
          {/* Eyebrow */}
          <span className="block text-xs uppercase tracking-[0.35em] text-white/50">
            Let’s work together
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.05] text-white">
            Ready to elevate your
            <br />
            digital presence?
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/65">
            We partner with forward-thinking brands to design and build digital
            experiences that are refined, effective, and scalable.
          </p>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              gap-3
              mt-12
              px-10
              py-4
              rounded-full
              bg-white
              text-black
              text-lg
              font-medium
              hover:bg-orange-500
              hover:text-black
              transition-colors
            "
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
