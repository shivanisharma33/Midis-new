import { motion } from "framer-motion";

const images = [
  "src/assets/port/13.png",
  "src/assets/port/18.png",
  "src/assets/port/44.png",
  "src/assets/port/25.png",
  "src/assets/port/19.png",
  "src/assets/port/9.png",
  "src/assets/port/16.png",
  "src/assets/port/14.png",
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
