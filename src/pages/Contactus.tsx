"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { motion } from "framer-motion";

/* ================= MOTION ================= */
const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================= CONTACT PAGE ================= */
const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* ================= SPLIT HERO ================= */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden pt-32 py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center py-32 lg:py-0"
          >
            <span className="uppercase tracking-[0.4em] text-gray-400 text-sm">
              Contact
            </span>

       <h1 className="mt-10 text-[56px] sm:text-[72px] lg:text-[92px] font-extrabold leading-[1.03]">
  Let’s start a
  <span className="block mt-2">meaningful</span>
  <span className="block mt-2">conversation</span>
</h1>


            <p className="mt-10 max-w-lg text-gray-400 text-lg leading-relaxed">
              Every great project begins with a conversation. Tell us what
              you’re building and we’ll help shape what comes next.
            </p>

            <div className="mt-16 space-y-6 text-sm">
              <div>
                <p className="uppercase tracking-widest text-gray-500 text-xs">
                  Email
                </p>
                <p className="text-lg font-medium">hello@midis.in</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-gray-500 text-xs">
                  Phone
                </p>
                <p className="text-lg font-medium">+91 97793 20626</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center py-32 lg:py-0"
          >
            <div className="
              w-full max-w-xl
              bg-white text-black
              rounded-[44px]
              shadow-[0_80px_200px_rgba(0,0,0,0.35)]
              px-12 py-14
            ">
              <h2 className="text-3xl font-bold">
                Tell us about your project
              </h2>

              <p className="mt-4 text-gray-600">
                Share a few details and we’ll get back to you shortly.
              </p>

              <form className="mt-12 space-y-10">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-3 w-full border-b border-gray-300 focus:border-black outline-none py-3 text-lg"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-gray-300 focus:border-black outline-none py-3 text-lg"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What are you looking to build?"
                    className="mt-3 w-full border-b border-gray-300 focus:border-black outline-none py-3 text-lg resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  className="
                    mt-6 w-full
                    py-5 rounded-full
                    bg-black text-white
                    font-medium
                    hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                  "
                >
                  Send message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
