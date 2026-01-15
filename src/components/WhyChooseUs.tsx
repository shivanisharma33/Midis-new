import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20 lg:mb-28"
        >
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-semibold tracking-tight leading-tight">
            Why Midis
            <br />
            and Not Someone Else?
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed">
            There are many agencies. What sets us apart is not noise or promises,
            but how we think, collaborate, and deliver measurable growth.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {reasons.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.12,
                }}
                className={`
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-12
                  lg:gap-20
                  items-center
                `}
              >
                {/* TEXT */}
                <div className={`${reverse ? "lg:order-2" : ""}`}>
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    {item.eyebrow}
                  </span>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-100">
                  <motion.div
                    className="
                      relative
                      w-full
                      h-[240px]
                      sm:h-[320px]
                      md:h-[380px]
                      lg:h-[420px]
                      flex
                      items-center
                      justify-center
                    "
                    whileHover={!isMobile ? { scale: 0.94 } : {}}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <motion.img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.05,
                              filter: "blur(12px)",
                              opacity: 0.6,
                            }
                          : {}
                      }
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />

                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="relative w-[92%] h-[92%] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                      whileHover={!isMobile ? { scale: 0.9 } : {}}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
