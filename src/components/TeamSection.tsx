import React from "react";
import { motion } from "framer-motion";
import gaurav from "../assets/Gaurav zSharma.png";
import sagar from "../assets/Sagar bakshi.jpg";

const team = [
  {
    name: "Sagar Bakshi",
    role: "Managing Director",
    image: sagar,
    description:
      "Operational leader with deep expertise in AI-driven growth strategies, intelligent automation, and building systems that help brands scale faster and smarter.",
  },
  {
    name: "Gaurav Sharma",
    role: "CEO & Director",
    image: gaurav,
    description:
      "Visionary leader driving strategic innovation, scalable growth solutions, and high-impact brand execution across digital ecosystems.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white px-10 lg:px-28 xl:px-36 py-56 overflow-hidden">
      <div className="max-w-[1550px] mx-auto relative">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mb-56"
        >
          <span className="block text-xs uppercase tracking-[0.55em] text-gray-400 mb-14">
            Leadership
          </span>

          <h2 className="text-[64px] md:text-[82px] xl:text-[102px] font-semibold leading-[1.02] tracking-tight text-black">
            The minds shaping <br />
            <span className="text-black/20">Midis</span>
          </h2>
        </motion.div>

        {/* ================= TEAM MEMBERS ================= */}
        <div className="space-y-64">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-36 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* ================= IMAGE WRAPPER ================= */}
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative rounded-[42px] overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute -inset-6 bg-gradient-to-br from-black/10 via-transparent to-transparent blur-2xl opacity-60" />

                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="relative z-10 w-full h-[640px] xl:h-[720px] object-cover rounded-[42px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent z-20" />
              </motion.div>

              {/* ================= CONTENT ================= */}
              <div className="max-w-[580px] relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.9 }}
                  viewport={{ once: true }}
                  className="text-[44px] xl:text-[52px] font-medium text-black mb-6"
                >
                  {member.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-xs uppercase tracking-[0.45em] text-gray-500 mb-16"
                >
                  {member.role}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.9 }}
                  viewport={{ once: true }}
                  className="text-[18.5px] xl:text-[19.5px] leading-[1.95] text-gray-700"
                >
                  {member.description}
                </motion.p>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "auto" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 mt-20"
                >
                  <span className="h-px w-24 bg-black" />
                  <span className="text-sm tracking-wide text-gray-500">
                    Strategy • Leadership • Impact
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
