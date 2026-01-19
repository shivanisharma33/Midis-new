import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Sagar Bakshi",
    role: "Managing Director",
    image: "/Sagar bakshi.jpg",
    description:
      "Sagar Bakshi leads Midis as Managing Director, overseeing strategy, operations, and digital growth initiatives. With a strong focus on AI-driven systems, automation, and scalable brand building, he helps businesses transform complexity into clarity. His experience spans multiple e-commerce ventures and Mining Discovery, where he contributes to global industry insights and long-term growth strategies.",
  },
  {
    name: "Gaurav Sharma",
    role: "CEO & Director",
    image: "/Gaurav zSharma.png",
    description:
      "Gaurav Sharma serves as CEO & Director at Midis, guiding vision, innovation, and execution across digital platforms. With deep expertise in branding, web development, and performance-led solutions, he ensures every initiative delivers meaningful and measurable impact. He also leads strategic growth at Mining Discovery, bridging technology with industry-focused intelligence.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-neutral-50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
     <motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true }}
  className="max-w-3xl mb-24"
>
  {/* Eyebrow */}
  <span className="block text-xs uppercase tracking-[0.45em] text-orange-500 mb-5">
    Leadership
  </span>

  {/* Heading */}
  <h2 className="text-[38px] sm:text-[48px] lg:text-[60px] font-semibold leading-tight text-black">
    The people guiding
    <br />
    <span className="text-orange-500">Midis forward</span>
  </h2>
</motion.div>


        {/* ================= PROFILES ================= */}
        <div className="space-y-24 sm:space-y-32">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="
                bg-white
                rounded-3xl
                p-6
                sm:p-10
                lg:p-14
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-12
                lg:gap-20
                items-center
                shadow-[0_40px_120px_rgba(0,0,0,0.06)]
              "
            >
              {/* IMAGE */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-[360px]
                    sm:h-[420px]
                    lg:h-[480px]
                    object-cover
                    rounded-2xl
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="max-w-xl">
                <h3 className="text-[28px] sm:text-[34px] font-medium text-black">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-gray-500">
                  {member.role}
                </p>

                <p className="mt-6 sm:mt-8 text-[16px] sm:text-[17px] leading-[1.85] text-gray-700">
                  {member.description}
                </p>

                {/* Divider */}
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-px w-16 bg-black" />
                  <span className="text-sm text-gray-500">
                    Leadership • Strategy • Growth
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
