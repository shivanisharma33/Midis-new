import { motion } from "framer-motion";
import heroBg from "@/assets/Futuristic VR Experience.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-40">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        <div className="flex justify-center items-center min-h-[60vh]">
          <h1 className="hero-text text-white select-none whitespace-nowrap">
            MIDIS
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;
