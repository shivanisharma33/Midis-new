import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    tag: "Website",
    title: "Web Development",
    description:
      "Driven by a deep passion for design and performance, we build scalable, high-impact websites that elevate brands and deliver measurable results.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
  },
  {
    tag: "Design",
    title: "UI / UX Design",
    description:
      "We design intuitive digital experiences that blend aesthetics with usability, creating interfaces users love to interact with.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80",
  },
  {
    tag: "Marketing",
    title: "Digital Marketing",
    description:
      "Strategic campaigns built for growth — combining creativity, data, and performance marketing to scale your business.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
  },
  {
    tag: "Video",
    title: "Video Editing",
    description:
      "Cinematic, high-conversion video content crafted for brands — from social reels to promotional films that capture attention and drive engagement.",
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=1600&q=80",
  },
  {
    tag: "SEO",
    title: "Search Engine Optimization",
    description:
      "Data-driven SEO strategies designed to increase visibility, attract qualified traffic, and convert search intent into real business growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  },
  {
    tag: "Commerce",
    title: "E-Commerce Strategy",
    description:
      "End-to-end e-commerce solutions focused on user experience, conversion optimization, and scalable growth across digital storefronts.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
  },
  {
    tag: "Creative",
    title: "Graphic Design",
    description:
      "Bold, consistent visual identities and design systems that strengthen brand presence across digital, social, and print platforms.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black px-6 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
     {/* Heading */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="max-w-3xl mb-24"
>
  {/* Eyebrow */}
  <div className="flex items-center gap-6 mb-6">
    <span className="h-px w-16 bg-white/40" />
    <span className="text-xs uppercase tracking-[0.45em] text-white/80">
      Services
    </span>
  </div>

  {/* Main Title */}
  <h1 className="text-[48px] md:text-[64px] lg:text-[84px] font-semibold leading-[1.05] tracking-tight text-white">
    What we craft <br />
    <span className="text-white/60">for growing brands</span>
  </h1>

  {/* Supporting Copy */}
  <p className="mt-8 text-lg leading-relaxed text-white/70 max-w-xl">
    From strategy to execution, we design and build digital solutions
    that elevate brands, engage audiences, and drive measurable growth.
  </p>

  {/* Accent Line */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "120px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="mt-10 h-[2px] bg-white/30"
  />
</motion.div>

          {/* Cards */}
       <div className="space-y-16 md:space-y-24">
  {services.map((service, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative rounded-[24px] md:rounded-[28px] bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-6 sm:p-8 lg:p-16 items-center">

        {/* Image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-xl sm:rounded-2xl overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[220px] sm:h-[260px] lg:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl text-center lg:text-left"
        >
          <span className="flex justify-center lg:justify-start items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/80 mb-4">
            <span className="w-2 h-2 bg-white rounded-full" />
            {service.tag}
          </span>

          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">
            {service.title}
          </h2>

          <p className="text-[15px] sm:text-base lg:text-lg leading-relaxed text-white/85">
            {service.description}
          </p>

          <button className="group mx-auto lg:mx-0 flex items-center gap-4 mt-8 sm:mt-10 text-white">
            <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-orange-600 flex items-center justify-center text-lg font-medium transition-transform duration-300 group-hover:scale-110">
              →
            </span>
            <span className="text-xs sm:text-sm tracking-wide">
              Learn More
            </span>
          </button>
        </motion.div>

      </div>
    </motion.div>
  ))}
</div>


        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
