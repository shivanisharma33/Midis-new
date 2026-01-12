import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d10d0123c0be15052ede_Glossy%20Tote%20Bags%20on%20Vibrant%20Background.webp",
    tag: "Website",
    title: "Design",
    description: "Driven by a deep passion for design, we craft meaningful visuals that spark emotion and leave a powerful, lasting impression on your audience.",
    bgColor: "bg-[#f8f4f0]",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d1498f8548f8568bc6f7_Pastel%20Sneakers%20Display.webp",
    tag: "SEO",
    title: "Marketing",
    description: "We utilize a diverse blend of strategic channels and tailored tactics, each carefully selected and refined to effectively reach your goals.",
    bgColor: "bg-[#fff5f0]",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d16b259fd242a0ee6c1e_Modern%20Device%20Close-Up.webp",
    tag: "Front-end",
    title: "Prototype",
    description: "Highlighting the essential features, interactive elements, and practical functionalities that bring your idea to life.",
    bgColor: "bg-[#f0f5ff]",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d19782c018e44a110307_Modern%20Elegance_%20Tech%20%26%20Texture.webp",
    tag: "Business",
    title: "Branding",
    description: "A thoughtful craft rooted in storytelling and design—shaping perceptions, stirring emotions, and curating meaningful experiences.",
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
          <span className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Services We're Passionate About
          </span>
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
