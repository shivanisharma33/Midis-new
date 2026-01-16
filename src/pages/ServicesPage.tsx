"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ================= DATA ================= */

const services = [
  {
    tag: "Website",
    title: "Web Development",
    description:
      "Driven by a deep passion for design and performance, we build scalable, high-impact websites that elevate brands and deliver measurable results.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    more: [
      "Custom React / Next.js development",
      "High-performance & SEO-first builds",
      "Scalable backend integrations",
      "Clean, maintainable architecture",
    ],
  },
  {
    tag: "Website",
    title: "Web Designing",
    description:
      "Creating seamless digital experiences with engaging UI/UX and visually striking layouts that connect brands with users.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    more: [
      "Pixel-perfect UI design",
      "Responsive layouts for all devices",
      "Brand-aligned visual systems",
      "Conversion-focused interfaces",
    ],
  },
  {
    tag: "Creative",
    title: "Graphic Design",
    description:
      "Bold, consistent visual identities and design systems that strengthen brand presence across digital, social, and print platforms.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&q=80",
    more: [
      "Brand identity & guidelines",
      "Social & marketing creatives",
      "Print-ready assets",
      "Design systems & templates",
    ],
  },
  {
    tag: "Design",
    title: "UI / UX Design",
    description:
      "We design intuitive digital experiences that blend aesthetics with usability, creating interfaces users love to interact with.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80",
    more: [
      "User research & wireframing",
      "Interactive prototypes",
      "Usability testing",
      "Design-to-dev handoff",
    ],
  },
  {
    tag: "Design",
    title: "Content Writing",
    description:
      "We craft words that convert—blogs, captions, ads & more to tell your brand story.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80",
    more: [
      "SEO blogs & landing copy",
      "Ad & campaign messaging",
      "Brand voice development",
      "Content calendars",
    ],
  },
  {
    tag: "Marketing",
    title: "Digital Marketing",
    description:
      "Strategic campaigns built for growth — combining creativity, data, and performance marketing to scale your business.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
    more: [
      "Performance & growth marketing",
      "Paid ads & funnels",
      "Analytics & reporting",
      "Conversion optimization",
    ],
  },
  {
    tag: "Video",
    title: "Video Editing",
    description:
      "High-impact cinematic videos crafted for brands — from reels to promotional films that capture attention.",
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=1600&q=80",
    more: [
      "Social reels & shorts",
      "Promotional videos",
      "Motion graphics",
      "Platform-optimized exports",
    ],
  },
  {
    tag: "SEO",
    title: "Search Engine Optimization",
    description:
      "Data-driven SEO strategies designed to increase visibility, attract qualified traffic, and drive long-term growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    more: [
      "Technical SEO audits",
      "On-page & off-page SEO",
      "Keyword research",
      "Growth-focused SEO plans",
    ],
  },
  {
    tag: "Commerce",
    title: "E-Commerce Strategy",
    description:
      "End-to-end e-commerce solutions focused on UX, conversions, and scalable online growth.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
    more: [
      "Store setup & optimization",
      "Checkout & funnel tuning",
      "Product UX strategy",
      "Scalable growth planning",
    ],
  },
];

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

/* ================= PAGE ================= */

const ServicesPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
    <section className="relative px-6 lg:px-20 pt-32 pb-24 overflow-hidden">
  {/* Background Image */}
  {/* <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{
      backgroundImage:
        "url('./src/assets/Vibrant Digital Artists Studio.png')",
    }}
  /> */}

  {/* Blur + Overlay Layer */}
  <div className="absolute inset-0 backdrop-blur-md bg-white/2" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto">
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
      {/* Eyebrow */}
      <div className="flex items-center gap-5 mb-8">
        <span className="h-[1px] w-14 bg-gradient-to-r from-orange-600 to-orange-300" />
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-500">
          Our Services
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[46px] md:text-[64px] lg:text-[88px] font-semibold leading-[1.02] text-gray-900">
        We craft digital <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">
          experiences that grow brands
        </span>
      </h1>

    

      {/* Accent Line */}
      <div className="mt-12 h-[3px] w-40 rounded-full bg-gradient-to-r from-orange-600 to-orange-300" />
    </motion.div>
  </div>
</section>



      {/* ================= SERVICES CARDS ================= */}
      <section className="bg-white px-6 lg:px-20 pb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              className="rounded-[28px] bg-black/5 border border-black/10 shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 p-8 lg:p-16 items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl h-[260px] lg:h-[360px] w-full object-cover"
                />

                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-600">
                    {service.tag}
                  </span>

                  <h2 className="mt-4 text-[30px] lg:text-[44px] font-semibold text-gray-900">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-gray-700 text-lg">
                    {service.description}
                  </p>

                  <motion.div
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    className="overflow-hidden mt-6"
                  >
                    <ul className="space-y-3 text-gray-600">
                      {service.more.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="w-2 h-2 bg-gray-900 rounded-full mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="mt-10 flex items-center gap-4"
                  >
                    <span className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg">
                      →
                    </span>
                    <span className="text-sm tracking-wide">Learn More</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
