import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    tag: "Website",
    title: "Web Design",
    description: "Your website is like a first handshake. If it feels sloppy, people walk away. Our web design approach is clean, mobile-friendly, and always user-focused. Visitors should feel welcome, not confused.",
    bgColor: "bg-[#f8f4f0]",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    tag: "Website",
    title: "Web Development",
    description: "A website’s design might catch attention, but development keeps it alive. We build secure, scalable, and fast-loading sites—whether it’s e-commerce, a business portal, or something custom. Think of it as giving your brand a strong digital backbone.",
    bgColor: "bg-[#f8f4f0]",
  },
  {
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&q=80",
    tag: "SEO",
    title: "Graphic Designing",
    description: "People remember visuals before they remember words. Our graphic design services—logos, brand kits, social media visuals—make sure your business is instantly recognisable. Consistency is the secret to trust.",
    bgColor: "bg-[#fff5f0]",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
    tag: "Front-end",
    title: "Content Writing",
    description: "Words create trust. Blogs, landing pages, ads—we write content that feels natural but is also optimised for search engines. The trick is to write for humans first and Google second. That’s exactly how we do it.",
    bgColor: "bg-[#f0f5ff]",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d19782c018e44a110307_Modern%20Elegance_%20Tech%20%26%20Texture.webp",
    tag: "Business",
    title: "Email Marketing",
    description: "People check their inbox every day. That’s why email marketing is still one of the most powerful tools in digital. We create campaigns that feel personal and relevant—more like a conversation than a sales pitch.",
    bgColor: "bg-[#f5f0ff]",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d19782c018e44a110307_Modern%20Elegance_%20Tech%20%26%20Texture.webp",
    tag: "Business",
    title: "YouTube Management",
    description: "Grow your channel with expert strategies, optimized uploads, and professional branding support.",
    bgColor: "bg-[#f5f0ff]",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        scale,
        y,
        zIndex: index,
      }}
      className={`sticky top-20 ${service.bgColor} rounded-3xl p-8 lg:p-12 shadow-xl`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <motion.img 
            src={service.image}
            alt={service.title}
            className="w-full h-64 lg:h-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-coral">•</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">{service.tag}</span>
          </div>
          
          <h3 className="text-4xl lg:text-6xl font-medium mb-6 tracking-tight">{service.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {service.description}
          </p>
          
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 text-base font-medium group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-coral transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </span>
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  className="text-center mb-16"
>
  {/* Kicker */}
  <span className="block text-xs uppercase tracking-[0.35em] text-neutral-400 mb-4">
    Our Expertise
  </span>

  {/* Heading */}
  <h2 className="text-[42px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight leading-[1.05]">
    What We{" "}
    <span className="text-orange-500">
      Do Best
    </span>
  </h2>
</motion.div>


        <div className="relative space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
