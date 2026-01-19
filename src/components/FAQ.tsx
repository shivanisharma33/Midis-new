"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

/* ================= FAQ DATA ================= */

const faqs = [
  {
    question: "Can your digital strategy help my business grow?",
    answer:
      "Absolutely. A strong digital strategy connects your brand with the right audience. We use data-driven insights, content, and performance-focused campaigns to improve visibility, engagement, and measurable growth aligned with your business goals.",
  },
  {
    question: "Do you offer customized web development solutions?",
    answer:
      "Yes — no cookie-cutter solutions here. We design and develop custom websites that truly represent your brand, deliver seamless user experiences across all devices, and are built to perform, scale, and grow long term.",
  },
  {
    question: "Why should I choose Midis as my international SEO agency?",
    answer:
      "We understand the complexity of global marketing. From multilingual optimization to region-specific SEO strategies, we help brands expand across borders by driving international rankings, qualified traffic, and meaningful engagement.",
  },
  {
    question: "What is included in your website management services?",
    answer:
      "Our website management services include updates, performance monitoring, security checks, and content support. We ensure your website remains fast, secure, reliable, and up to date — so your brand never misses an opportunity online.",
  },
  {
    question: "When should a website be redesigned?",
    answer:
      "If your website feels outdated, loads slowly, or struggles to convert visitors, it’s time for a redesign. We help brands modernize their digital presence with clean design, strong UX, and SEO-focused performance improvements.",
  },
];

/* ================= COMPONENT ================= */

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="block mb-4 text-xs uppercase tracking-[0.4em] text-black/60">
            FAQs
          </span>

          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.05] text-black">
            Common questions,
            <br />
            clear answers
          </h2>
        </motion.div>

        {/* ================= FAQ LIST ================= */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-6">
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-lg sm:text-xl font-medium text-black">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="
                      ml-6
                      w-9 h-9
                      rounded-full
                      border border-black/15
                      flex items-center justify-center
                      text-black/70
                      group-hover:border-black/30
                    "
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-3xl text-black/70 leading-relaxed text-base sm:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
