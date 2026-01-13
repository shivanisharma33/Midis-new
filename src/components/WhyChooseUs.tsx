import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-white" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-20">
          <span className="w-16 h-px bg-neutral-300" />

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] font-semibold text-center leading-tight"
          >
            Why Leading Brands Choose To Work With Us
          </motion.h3>

          <span className="w-16 h-px bg-neutral-300" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((item, index) => {
            const mobileX = index % 2 === 0 ? -80 : 80;
            const desktopX = index === 1 ? 120 : -120;

            return (
              <motion.div
                key={index}
                initial={
                  isMobile
                    ? { opacity: 0, x: mobileX }
                    : { opacity: 0, x: desktopX }
                }
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.15,
                }}
                className="group"
              >
                {/* IMAGE SHOWCASE (SAME-TO-SAME EFFECT) */}
                <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
                  <motion.div
                    className="relative w-full h-80 lg:h-96 flex items-center justify-center"
                    whileHover={!isMobile ? { scale: 0.9 } : {}}
                    transition={{
                      duration: 0.45,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    {/* Blurred background layer */}
                    <motion.img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.05,
                              filter: "blur(14px)",
                              opacity: 0.6,
                            }
                          : {}
                      }
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />

                    {/* Foreground product image */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="relative w-[90%] h-[90%] object-cover rounded-2xl shadow-2xl"
                      whileHover={!isMobile ? { scale: 0.88 } : {}}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </motion.div>
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
                <h4 className="mt-2 text-2xl font-medium tracking-tight">
                  {item.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
