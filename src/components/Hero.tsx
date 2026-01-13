import { motion } from "framer-motion";
import heroBg from "@/assets/Futuristic VR Experience.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-40">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      {/* Soft Light Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col justify-center items-center min-h-[60vh] text-center gap-6">

          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-xs md:text-sm tracking-[0.4em] uppercase"
          >
            Top Rated Global Digital Agency
          </motion.span>

          {/* Main Brand */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="
              hero-text 
              text-white 
              tracking-[0.35em] 
              font-semibold 
              select-none 
              relative
            "
          >
            MIDIS

            {/* Underline Glow */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              className="absolute left-1/2 -bottom-6 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent origin-center"
            />
          </motion.h1>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-white/75 text-sm md:text-base tracking-wide leading-relaxed"
          >
            Building Brands, Driving Growth, Growing Beyond Limits.
          </motion.p>

        </div>
      </div>

   

    </section>
  );
};

export default Hero;
