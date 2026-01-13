import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    image:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1600&auto=format&fit=crop",
    category: "Expert Team",
    year: "Since 2018",
    title: "Industry Professionals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?q=80&w=1600&auto=format&fit=crop",
    category: "Strategy",
    year: "Proven",
    title: "Result-Driven Approach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=1600&auto=format&fit=crop",
    category: "Collaboration",
    year: "Global",
    title: "Client-First Mindset",
  },
  {
    image:
      "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a07c8e09898fa9493b1bbc_Modern%20Elegance%20Tech%20%26%20Texture.webp",
    category: "Innovation",
    year: "Future Ready",
    title: "Creative & Scalable Solutions",
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-white" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-20">
          <span className="w-16 h-px bg-neutral-300" />

          <motion.h3
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] uppercase  text-black font-semibold text-center leading-tight"
          >
            Why Leading Brands Choose To Work With Us
          </motion.h3>

          <span className="w-16 h-px bg-neutral-300" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : {}
              }
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.18,
              }}
              whileHover={{ y: -6 }}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 lg:h-96 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Glass sheen */}
                <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition duration-700" />
              </div>

              {/* Meta */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm text-neutral-500">
                  {item.category}
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-sm text-neutral-500">
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <motion.h4
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  delay: index * 0.2 + 0.3,
                  duration: 0.6,
                }}
                className="mt-2 text-2xl font-medium tracking-tight"
              >
                {item.title}
              </motion.h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
