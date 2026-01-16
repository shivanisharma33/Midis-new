"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ================= DIRECTORS ================= */

const directors = [
  {
    name: "Sagar Bakshi",
    role: "Managing Director",
    image:
      "src/assets/Sagar bakshi.jpg",
  },
  {
    name: "Gourav Sharma",
    role: "CEO & Director",
    image:
      "src/assets/Gaurav zSharma.png",
  },
];

/* ================= TEAM MEMBERS ================= */

const team = [
  {
    name: "Shivani Dixit",
    role: "Frontend Developer",
    image:
      "https://www.midis.in/image/shiviiii.png",
  },
  {
    name: "Alin Mishra",
    role: "Shopify Developer",
    image:
      "https://www.midis.in/image/Alin.jpg",
  },
  {
    name: "Ojaswini saini",
    role: "Graphic Designer",
    image:
      "https://www.midis.in/image/member2.jpg",
  },
  {
    name: "Navkirat Bhogal",
    role: "SEO",
    image:
      "https://www.midis.in/image/member6.jpg",
  },
  {
    name: "Swayam Gandhi",
    role: "Backend Developer",
    image: "https://www.midis.in/image/member1.jpg",
  },
   {
    name: "Chanda",
    role: "Graphic Designer",
    image: "https://www.midis.in/image/member3.jpg",
  },
  {
    name: "Rahul Gehlot",
    role: "Graphic Designer",
    image: "https://www.midis.in/image/member4.jpg",
  },
];

/* ================= PAGE ================= */

export default function TeamPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-black to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Meet the People Behind the Magic
          </motion.h1>

          <p className="mt-6 text-gray-400 max-w-2xl">
            A multidisciplinary team of designers, developers, and strategists
            building world-class digital experiences at Midis.
          </p>
        </div>
      </section>

      {/* ================= DIRECTORS SECTION ================= */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-16">
            Board of Directors
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {directors.map((director, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group rounded-3xl overflow-hidden"
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white">
                    {director.name}
                  </h3>
                  <p className="text-gray-300">{director.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM MEMBERS ================= */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-16">
            Our Team Members
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-black"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          Want to Join Our Team?
        </motion.h2>

        <p className="text-gray-400 mt-4">
          We’re always looking for talented minds.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
          View Careers
        </button>
      </section>

      <Footer />
    </>
  );
}
