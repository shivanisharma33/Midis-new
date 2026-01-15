import { motion } from "framer-motion";

import img13 from "@/assets/port/13.png";
import img18 from "@/assets/port/18.png";
import img44 from "@/assets/port/44.png";
import img25 from "@/assets/port/25.png";
import img19 from "@/assets/port/19.png";
import img9 from "@/assets/port/9.png";
import img16 from "@/assets/port/16.png";
import img14 from "@/assets/port/14.png";

const images = [
  img13,
  img18,
  img44,
  img25,
  img19,
  img9,
  img16,
  img14,
];

const MarqueeImages = () => {
  return (
    <section className="py-12 overflow-hidden space-y-6">

      {/* TOP MARQUEE – LEFT */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={`top-${index}`}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-48 h-36 lg:w-64 lg:h-48 object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM MARQUEE – RIGHT (REVERSE) */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: [-1920, 0] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={`bottom-${index}`}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-48 h-36 lg:w-64 lg:h-48 object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default MarqueeImages;
