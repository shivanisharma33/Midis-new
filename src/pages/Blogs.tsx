"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { motion } from "framer-motion";

import gradientDataGraph from "@/assets/Gradient Data Graph.png";
import artisticDesigners from "@/assets/Artistic Designers Modern Workspace.png";

/* ================= BLOG DATA ================= */
const blogs = [
  {
    id: 1,
    title: "How to Build a Digital Strategy That Scales",
    excerpt:
      "A practical framework for building long-term digital strategies that grow with your business.",
    image: gradientDataGraph,
    date: "Feb 10, 2026",
    category: "Strategy",
    featured: true,
  },
  {
    id: 2,
    title: "SEO Trends That Will Matter in 2026",
    excerpt:
      "From AI search to content depth — here’s what brands must focus on to stay ahead.",
    image: artisticDesigners,
    date: "Jan 28, 2026",
    category: "SEO",
  },
  {
    id: 3,
    title: "Social Media Growth Playbook",
    excerpt:
      "How modern brands build trust, reach, and conversions through social platforms.",
    image:
      "https://plus.unsplash.com/premium_photo-1684341008285-3da3c563143e?q=80&w=1032",
    date: "Dec 20, 2025",
    category: "Social Media",
  },
  {
    id: 4,
    title: "Email Marketing That Actually Converts",
    excerpt:
      "Learn how to design email campaigns that drive real engagement and revenue.",
    image:
      "https://media.istockphoto.com/id/935427102/photo/digital-marketing-word-on-blackboard-with-supportive-icons.jpg",
    date: "Nov 30, 2025",
    category: "Email Marketing",
  },
];

/* ================= MOTION PRESETS ================= */
const fadeSoft = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageEase = {
  hidden: { scale: 1.04 },
  visible: {
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

/* ================= BLOG PAGE ================= */
const BlogsPage = () => {
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.span
            variants={fadeSoft}
            initial="hidden"
            animate="visible"
            className="uppercase tracking-widest text-gray-400 text-sm block"
          >
            Insights & Thinking
          </motion.span>

          <motion.h1
            variants={fadeSoft}
            initial="hidden"
            animate="visible"
            className="mt-6 text-[46px] sm:text-[64px] lg:text-[84px] font-extrabold leading-[1.05] max-w-4xl"
          >
            Ideas, strategies & stories shaping digital growth
          </motion.h1>
        </div>
      </section>

      {/* ================= FEATURED BLOG ================= */}
      {featured && (
        <section className="-mt-24 relative z-10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <motion.div
              variants={fadeSoft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_60px_180px_rgba(0,0,0,0.2)] grid grid-cols-1 lg:grid-cols-2"
            >
              <motion.div
                variants={imageEase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <img
                  src={featured.image}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  Featured · {featured.category}
                </span>

                <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">
                  {featured.title}
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  {featured.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  className="mt-8 self-start text-sm font-semibold"
                >
                  Read Article →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= BLOG LIST ================= */}
      <section className="bg-[#f6f6f6] pt-32 pb-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {rest.map((blog, i) => (
            <motion.article
              key={blog.id}
              variants={fadeSoft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)] transition-shadow duration-500"
            >
              <motion.div
                variants={imageEase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <img
                  src={blog.image}
                  className="w-full h-[220px] object-cover"
                />
              </motion.div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {blog.category} · {blog.date}
                </span>

                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  className="mt-6 text-sm font-semibold"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogsPage;
