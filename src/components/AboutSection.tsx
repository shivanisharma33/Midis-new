"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

const ease = [0.22, 1, 0.36, 1];


const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px",
  });

  return (
  <section
  ref={ref}
  className="
    scroll-section
    min-h-screen
    bg-white
    flex items-center
    justify-center
    px-6
    lg:px-20
  "
>
  <motion.div
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6, ease }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-[42px] md:text-[64px] lg:text-[80px] font-medium tracking-tight leading-[1.05] text-black">
      
      {/* LINE 1 */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : {}}
          transition={{ duration: 1, ease }}
        >
          We blend{" "}
          <span className="inline-flex align-middle mx-2">
            <motion.img
              src={inlineImages[0].src}
              alt={inlineImages[0].alt}
              className="h-[44px] w-[90px] rounded-full object-cover"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.6, ease }}
            />
          </span>
          creativity with
        </motion.div>
      </div>

 

      {/* LINE 2 */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : {}}
          transition={{ duration: 1, delay: 0.12, ease }}
        >
          technology to{" "}
          <span className="inline-flex align-middle mx-2">
            <motion.img
              src={inlineImages[1].src}
              alt={inlineImages[1].alt}
              className="h-[44px] w-[90px] rounded-full object-cover"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.45, duration: 0.6, ease }}
            />
          </span>
          revolutionize how design
        </motion.div>
      </div>



      {/* LINE 3 */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : {}}
          transition={{ duration: 1, delay: 0.24, ease }}
        >
          <span className="inline-flex align-middle mx-2">
            <motion.img
              src={inlineImages[2].src}
              alt={inlineImages[2].alt}
              className="h-[44px] w-[90px] rounded-full object-cover"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.6, ease }}
            />
          </span>
          meets reality.
        </motion.div>
      </div>
    </h2>
  </motion.div>
</section>

  );
};

export default AboutSection;
