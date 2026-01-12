import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ctaImages = [
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66baf162b757a39b091_Tennis%20Net%20Close-Up.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bbac017f6a400b614_Stylized%20Graffiti-Inspired%20Robot.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bdd829a2fb5a6dc35_Fashion%20Portrait%20with%20Vibrant%20Hat.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/68a061f4c6476b52f101c546_Tennis%20Court%20Smiley.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/68a06273d7ac585cdfd38aff_Striking%20Fashion%20Portrait.webp",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66c64dc19cb7248b949_Color%20Block%20Tote%20Bag.webp",
];

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col items-center">
          {/* Floating Images - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-0 top-0 hidden lg:flex flex-col gap-4"
          >
            <img 
              src={ctaImages[0]}
              alt=""
              className="w-32 h-40 object-cover rounded-2xl"
            />
            <img 
              src={ctaImages[1]}
              alt=""
              className="w-32 h-40 object-cover rounded-2xl"
            />
            <img 
              src={ctaImages[2]}
              alt=""
              className="w-32 h-40 object-cover rounded-2xl"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
              Let's Work Together!
            </h3>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowUpRight className="w-5 h-5" />
              Contact
            </motion.a>
          </motion.div>

          {/* Floating Images - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute right-0 top-0 hidden lg:flex flex-col gap-4"
          >
            <img 
              src={ctaImages[3]}
              alt=""
              className="w-32 h-40 object-cover rounded-2xl"
            />
            <img 
              src={ctaImages[4]}
              alt=""
              className="w-32 h-40 object-cover rounded-2xl"
            />
            <img 
              src={ctaImages[5]}
              alt=""
              className="w-32 h-40 object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
