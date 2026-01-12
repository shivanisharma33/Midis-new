import { motion } from "framer-motion";

const images = [
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66baf162b757a39b091_Tennis%20Net%20Close-Up.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66b1580d9ca27b80500_Dapper%20Young%20Man%20with%20Stylish%20Attire%20and%20Joyful%20Smile.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66c64dc19cb7248b949_Color%20Block%20Tote%20Bag.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a24a7a04635323b86_Cheerful%20Young%20Woman%20with%20Colorful%20Attire.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bd60d48c5c5315745_Matte%20Black%20Circular%20Object%20on%20Red.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66b451619260e657a43_Pristine%20White%20Sneakers%20on%20Light%20Blue%20Background.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a260387e191729798_Modern%20Gaming%20Controller.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f669754b169a3dbd5c7f_Mini%20Car%20Flower%20Vase.webp",
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
