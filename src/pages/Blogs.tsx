"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    date: "Dec 20, 2025",
    category: "Social Media",
  },
  {
    id: 4,
    title: "Email Marketing That Actually Converts",
    excerpt:
      "Learn how to design email campaigns that drive real engagement and revenue.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80",
    date: "Nov 30, 2025",
    category: "Email Marketing",
  },
  {
    id: 5,
    title: "Brand Positioning in a Crowded Market",
    excerpt:
      "How successful brands differentiate themselves and stay memorable.",
    image:
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=1200&q=80",
    date: "Nov 12, 2025",
    category: "Branding",
  },
  {
    id: 6,
    title: "UI/UX Principles for High-Converting Websites",
    excerpt:
      "Design psychology and layout strategies that directly impact conversions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    date: "Oct 26, 2025",
    category: "UX Design",
  },
  {
    id: 7,
    title: "Website Performance Optimization Guide",
    excerpt:
      "Speed, Core Web Vitals, and performance tweaks every site must implement.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    date: "Oct 10, 2025",
    category: "Performance",
  },
  {
    id: 8,
    title: "AI in Digital Marketing: What Actually Works",
    excerpt:
      "Cut through the hype and discover practical AI use cases for marketers.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    date: "Sep 28, 2025",
    category: "AI Marketing",
  },
  {
    id: 9,
    title: "Conversion Rate Optimization Checklist",
    excerpt:
      "Proven CRO tactics to turn more visitors into paying customers.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    date: "Sep 12, 2025",
    category: "CRO",
  },
  {
    id: 10,
    title: "Content Strategy for Long-Term Growth",
    excerpt:
      "How to build content engines that compound results over time.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80",
    date: "Aug 30, 2025",
    category: "Content",
  },
  {
    id: 11,
    title: "Landing Page Mistakes That Kill Conversions",
    excerpt:
      "Common UX and messaging mistakes that silently cost you leads.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    date: "Aug 14, 2025",
    category: "UX Design",
  },
  {
    id: 12,
    title: "The Future of Digital Agencies",
    excerpt:
      "How agencies are evolving with automation, AI, and performance models.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    date: "Jul 30, 2025",
    category: "Business",
  },
];

/* ================= PAGE ================= */
const BlogsPage = () => {
  const featured = blogs.find((b) => b.featured);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-48 pb-36 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-widest text-gray-400 text-sm block"
          >
            Insights & Thinking
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-[48px] sm:text-[64px] lg:text-[88px] font-extrabold leading-[1.05] max-w-5xl"
          >
            Ideas, strategies & stories shaping digital growth
          </motion.h1>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      {featured && (
        <section className="-mt-28 relative z-10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 rounded-[36px] overflow-hidden bg-white shadow-[0_80px_200px_rgba(0,0,0,0.25)]"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover"
              />

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Featured · {featured.category}
                </span>

                <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                  {featured.title}
                </h2>

                <p className="mt-6 text-gray-600 text-lg">
                  {featured.excerpt}
                </p>

                <button className="mt-10 text-sm font-semibold">
                  Read Article →
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= ALL BLOGS ================= */}
      <section className="bg-[#f6f6f6] pt-40 pb-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
              className="relative rounded-[32px] overflow-hidden bg-black group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[360px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-8 text-white">
                <p className="text-xs text-white/70">{blog.date}</p>

                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-4 text-sm text-white/80 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-6 text-sm font-semibold">
                  Read Article →
                </div>
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
