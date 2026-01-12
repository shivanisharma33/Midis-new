import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: 99, suffix: "+", label: "Clients" },
  { number: 150, suffix: "+", label: "Projects" },
  { number: 50, suffix: "+", label: "Developers" },
  { number: 25, suffix: "+", label: "AI Engineers" },
];

const images = [
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a437c887f81eeb0e3_Modern%20Keyboard%20Close-Up.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a70c7da6d8e84b00d_Modern%20Pastel%20Chair.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66b451619260e657a43_Pristine%20White%20Sneakers%20on%20Light%20Blue%20Background.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66aaf9aa1041b8b3d8b_Minimalist%20Fashion%20Pose.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66abfc1a54c6beb56e8_Stylish%20Woman%20Portrait.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a260387e191729798_Modern%20Gaming%20Controller.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a95b7b1338ffaefc6_Urban%20Chic%20in%20Pink%20and%20Teal.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bdce0b19c84f285d2_Colorful%20Tote%20Bag%20on%20Turquoise%20Background.webp",
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const spacedTitle = "We are always striving to bring cutting-edge ideas to life.".split("").join("    ");

  return (
    <section ref={containerRef} className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base font-medium tracking-[0.2em] text-center mb-16 max-w-4xl mx-auto"
        >
          {spacedTitle}
        </motion.h4>

        {/* Images Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex justify-center gap-4 mb-20 overflow-hidden"
        >
          {images.slice(0, 8).map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3 + index * 0.05 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={src}
                alt=""
                className="w-24 h-32 lg:w-32 lg:h-40 object-cover rounded-xl flex-shrink-0"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5 + index * 0.1 
              }}
              className="text-center"
            >
              <div className="text-5xl lg:text-7xl font-medium mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
