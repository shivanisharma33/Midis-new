import { motion } from "framer-motion";
import heroBg from "@/assets/Futuristic VR Experience.png";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-40 scroll-section">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105 z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0, scale: 1.15 }}
        whileInView={{ opacity: 1, scale: 1.05 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-10 pointer-events-none" />

      {/* Soft Light Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col justify-center items-center min-h-[60vh] text-center gap-6">

          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 1, ease }}
            className="text-white/80 text-xs md:text-sm tracking-[0.4em] uppercase"
          >
            Top Rated Global Digital Agency
          </motion.span>

          {/* Main Brand */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, duration: 1.4, ease }}
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

            {/* Underline Glow — PERFECTLY CENTERED */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
              className="
                absolute
                left-0
                right-0
                -bottom-4
                mx-auto
                h-px
                w-32
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
                origin-center
              "
            />
          </motion.h1>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease }}
            className="
              text-white
              text-sm
              md:text-base
              max-w-2xl
              leading-relaxed
              tracking-wide
            "
          >
            Building Brands, Driving Growth, Growing Beyond Limits.
          </motion.p>

        </div>
      </div>

    </section>
  );
};

export default Hero;
