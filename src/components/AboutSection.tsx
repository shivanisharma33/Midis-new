import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inlineImages = [
  {
    src: "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bbac017f6a400b614_Stylized%20Graffiti-Inspired%20Robot.webp",
    alt: "Creativity",
  },
  {
    src: "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66ced2610f6911fafcf_Glossy%20Tote%20Bags%20on%20Vibrant%20Background.webp",
    alt: "Technology",
  },
  {
    src: "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bdd829a2fb5a6dc35_Fashion%20Portrait%20with%20Vibrant%20Hat.webp",
    alt: "Design",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-[42px] md:text-[64px] lg:text-[80px] font-medium tracking-tight leading-[1.05]">
            We blend{" "}
            <span className="inline-flex align-middle mx-2">
              <motion.img
                src={inlineImages[0].src}
                alt={inlineImages[0].alt}
                className="h-[44px] w-[90px] rounded-full object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </span>
            creativity with
            <br />
            technology to{" "}
            <span className="inline-flex align-middle mx-2">
              <motion.img
                src={inlineImages[1].src}
                alt={inlineImages[1].alt}
                className="h-[44px] w-[90px] rounded-full object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.35, duration: 0.5 }}
              />
            </span>
            revolutionize how design{" "}
            <span className="inline-flex align-middle mx-2">
              <motion.img
                src={inlineImages[2].src}
                alt={inlineImages[2].alt}
                className="h-[44px] w-[90px] rounded-full object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </span>
            meets reality.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
