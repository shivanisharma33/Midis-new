import React from "react";
import { motion } from "framer-motion";
import gaurav from "../assets/Gaurav zSharma.png";
import sagar from "../assets/Sagar bakshi.jpg";

const team = [
  {
    name: "Gaurav Sharma",
    role: "CEO & Director",
    image: gaurav,
    description:
      "Visionary leader driving strategic innovation, scalable growth solutions, and high-impact brand execution across digital ecosystems.",
  },
  {
    name: "Sagar Bakshi",
    role: "Managing Director",
    image: sagar,
    description:
      "Operational leader with deep expertise in AI-driven growth strategies, intelligent automation, and building systems that help brands scale faster and smarter.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white px-8 lg:px-20 py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mb-40"
        >
          <span className="block text-xs uppercase tracking-[0.5em] text-gray-400 mb-10">
            Our Team
          </span>

          <h2 className="text-[46px] md:text-[66px] lg:text-[88px] font-semibold leading-[1.02] tracking-tight text-black">
            The people behind <br />
            <span className="text-black/30">Midis</span>
          </h2>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-44">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-[32px] ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[540px] object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="max-w-xl">
                <h3 className="text-[38px] md:text-[46px] font-medium text-black mb-6">
                  {member.name}
                </h3>

                <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-12">
                  {member.role}
                </p>

                <p className="text-lg leading-[1.85] text-gray-700">
                  {member.description}
                </p>

                {/* Signature */}
                <div className="flex items-center gap-5 mt-14">
                  <span className="h-px w-16 bg-black" />
                  <span className="text-sm tracking-wide text-gray-500">
                    Leadership • Vision • Execution
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
