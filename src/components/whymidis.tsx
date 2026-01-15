"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import vibrantStudio from "@/assets/Vibrant Digital Artists Studio.png";
import creativePhotographer from "@/assets/Creative Photographer in Colorful Setting.png";
import futuristicVR from "@/assets/Futuristic VR Experience (1).png";
import futuristicPortrait from "@/assets/Futuristic Portrait.png";

gsap.registerPlugin(ScrollTrigger);

/* ================= WORKFLOW DATA ================= */
const workflowCards = [
  {
    heading: "Experience Across Borders",
    description:
      "When you work with Midis, you gain insight shaped by global markets. We understand what works across regions, cultures, and audiences — and apply it strategically to your brand.",
    sub: "Global knowledge. Local impact.",
  },
  {
    heading: "All-in-One Solutions",
    description:
      "From strategy to execution, we handle everything under one roof. No need to coordinate with multiple agencies — every channel works toward one clear objective.",
    sub: "One partner. Complete execution.",
  },
  {
    heading: "Clear Communication",
    description:
      "We believe in clarity over jargon. You’ll always know what’s happening, why it matters, and how it impacts your business — explained simply.",
    sub: "Transparency builds trust.",
  },
  {
    heading: "Growth-Driven Strategies",
    description:
      "Our strategies are designed to scale. As your business grows, we adapt, optimize, and evolve to support long-term success.",
    sub: "Built for sustainable growth.",
  },
];

/* ================= WHAT WE DO DATA ================= */
const whatWeDoItems = [
  {
    number: "01",
    label: "Global perspective",
    description:
      "We understand how people behave online across cultures and regions. Our strategies adapt to audiences — never copied, never generic.",
    image: vibrantStudio,
  },
  {
    number: "02",
    label: "Return on investment",
    description:
      "We don’t celebrate likes or impressions. Every campaign is designed to deliver measurable leads, sales, and revenue growth.",
    image: creativePhotographer,
  },
  {
    number: "03",
    label: "Real collaboration",
    description:
      "We work alongside your team, not behind reports. Strategies evolve as markets change — and we adapt with you.",
    image: futuristicVR,
  },
  {
    number: "04",
    label: "Balance of ideas and data",
    description:
      "Bold ideas capture attention, but data keeps us grounded. Every decision is backed by insights, testing, and performance metrics.",
    image: futuristicPortrait,
  },
];

const Page: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const whatWeDoRef = useRef<HTMLDivElement | null>(null);
  const workflowRef = useRef<HTMLDivElement | null>(null);
  const workflowTrackRef = useRef<HTMLDivElement | null>(null);

  /* ================= WHAT WE DO PIN ================= */
  useEffect(() => {
    if (!whatWeDoRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: whatWeDoRef.current,
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const index = Math.min(
          whatWeDoItems.length - 1,
          Math.floor(self.progress * whatWeDoItems.length)
        );
        setActiveIndex(index);
      },
    });

    return () => trigger.kill();
  }, []);

  /* ================= WORKFLOW GSAP ================= */
  useEffect(() => {
    if (!workflowRef.current || !workflowTrackRef.current) return;

    const mm = gsap.matchMedia();

    /* DESKTOP */
    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".workflow-card");
      const heading = workflowRef.current!.querySelector("h1");

      const CARD_WIDTH = 520;
      const GAP = 64;
      const scrollDistance = (CARD_WIDTH + GAP) * (cards.length - 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workflowRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
        },
      });

      /* ✅ FIXED: RESPONSIVE HEADING MOVE */
      tl.to(heading, {
        x: "-40vw",
        duration: 0.7,
        ease: "power2.out",
      });

      tl.to(
        workflowTrackRef.current,
        { x: -scrollDistance, ease: "none" },
        "<"
      );

      return () => tl.kill();
    });

    /* MOBILE */
    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".workflow-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? -120 : 120 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* ================= WHAT WE DO ================= */}
     <section
  ref={whatWeDoRef}
  className="
    w-full
    min-h-[100svh]
    bg-white
    overflow-hidden
    flex
    flex-col
    lg:flex-row
  "
>
  {/* ================= LEFT CONTENT ================= */}
  <div
    className="
      w-full
      lg:w-1/2
      flex
      flex-col
      justify-center
      px-5
      sm:px-8
      md:px-12
      lg:px-[90px]
      py-16
      sm:py-20
      lg:py-0
    "
  >
    <span className="text-xs sm:text-sm tracking-widest text-gray-400 mb-5">
      {whatWeDoItems[activeIndex].number}
    </span>

    <h2
      className="
        text-black
        font-extrabold
        tracking-tight
        leading-[1.05]
        text-[30px]
        sm:text-[38px]
        md:text-[48px]
        lg:text-[60px]
        xl:text-[64px]
      "
    >
      {whatWeDoItems[activeIndex].label}
    </h2>

    <p
      className="
        mt-5
        sm:mt-6
        max-w-xl
        text-gray-600
        text-[14px]
        sm:text-[15px]
        md:text-[16px]
        lg:text-[17px]
        leading-[1.75]
      "
    >
      {whatWeDoItems[activeIndex].description}
    </p>
  </div>

  {/* ================= RIGHT IMAGE ================= */}
  <div
    className="
      w-full
      lg:w-1/2
      relative
      overflow-hidden
      h-[260px]
      sm:h-[360px]
      md:h-[440px]
      lg:h-auto
      lg:min-h-[100svh]
    "
  >
    {whatWeDoItems.map((item, index) => (
      <img
        key={index}
        src={item.image}
        alt={item.label}
        className={`
          absolute inset-0
          w-full h-full
          object-cover
          transition-all
          duration-700
          ease-out
          ${
            activeIndex === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.06]"
          }
        `}
      />
    ))}

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/25 to-transparent pointer-events-none" />
  </div>
</section>


      {/* ================= WORKFLOW ================= */}
     <section
  ref={workflowRef}
  className="
    w-full
    min-h-[100svh]
    bg-[#0b0b0b]
    overflow-hidden
    relative
    flex
    flex-col
    lg:flex-row
    items-start
    lg:items-center
  "
>
  {/* ================= LEFT HEADING ================= */}
  <div
    className="
      relative
      lg:absolute
      lg:left-[20px]
      lg:top-1/2
      lg:-translate-y-1/2
      px-5
      sm:px-8
      md:px-12
      lg:px-0
      z-10
      max-w-[520px]
      text-left
    "
  >
    <h1
      className="
        text-white
        font-extrabold
        tracking-tight
        leading-[1]
        text-[32px]
        sm:text-[44px]
        md:text-[56px]
        lg:text-[84px]
        xl:text-[96px]
        whitespace-normal
      "
    >
      What You’ll Gain
      <span className="block">With Midis</span>
    </h1>
  </div>

  {/* ================= CARD TRACK ================= */}
  <div
    ref={workflowTrackRef}
    className="
      w-full
      flex
      flex-col
      lg:flex-row
      gap-6
      sm:gap-8
      md:gap-10
      lg:gap-[64px]
      px-5
      sm:px-8
      md:px-12
      lg:pl-[560px]
      lg:pr-[140px]
      pt-16
      sm:pt-20
      lg:pt-0
      pb-20
      lg:pb-0
    "
  >
    {workflowCards.map((item, index) => (
      <div
        key={index}
        className="
          workflow-card
          w-full
          lg:flex-shrink-0
          mx-auto
        "
        style={{ maxWidth: "520px" }}
      >
        <div
          className="
            relative
            h-auto
            lg:h-[460px]
            rounded-[28px]
            sm:rounded-[32px]
            px-6
            sm:px-8
            md:px-10
            lg:px-[52px]
            py-8
            sm:py-10
            md:py-12
            lg:py-[56px]
            bg-white/95
            backdrop-blur-xl
            shadow-[0_30px_120px_rgba(0,0,0,0.45)]
            border
            border-black/5
            transition-all
            duration-500
            ease-out
            hover:-translate-y-[6px]
            sm:hover:-translate-y-[8px]
            hover:shadow-[0_70px_180px_rgba(0,0,0,0.55)]
          "
        >
          {/* Index */}
          <span
            className="
              absolute
              top-5
              right-5
              sm:top-6
              sm:right-6
              text-[36px]
              sm:text-[42px]
              lg:text-[48px]
              font-extrabold
              text-black/5
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <h2
            className="
              font-bold
              text-black
              tracking-tight
              text-[20px]
              sm:text-[22px]
              md:text-[24px]
              lg:text-[30px]
            "
          >
            {item.heading}
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              sm:mt-5
              text-gray-700
              text-[14px]
              sm:text-[15px]
              md:text-[16px]
              leading-[1.75]
            "
          >
            {item.description}
          </p>

          {/* Footer */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500">
              {item.sub}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default Page;
