import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const works = [
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a07c52d7ac585cdfd6fa7e_Elegant%20Blonde%20Profile.webp",
    category: "Design",
    year: "2024",
    title: "Elegant",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a07c0514986ec265bcd4e7_Modern%20Design%20Objects.webp",
    category: "Marketing",
    year: "2024",
    title: "Digital",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a07c6aeaa832d6e630e0ef_Vibrant%20Sports%20Jersey.webp",
    category: "Branding",
    year: "2024",
    title: "Vibrant",
  },
  {
    image: "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a07c8e09898fa9493b1bbc_Modern%20Elegance%20Tech%20%26%20Texture.webp",
    category: "Design",
    year: "2024",
    title: "Texture",
  },
];

const FeaturedWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const spacedTitle = "Featured Works for Our Incredible Clients.";

  return (
    <section ref={containerRef} className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
      <div className="flex items-center justify-center gap-6 mb-16">
  <span className="w-16 h-px bg-neutral-300" />

  <motion.h3
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="
      text-[11px] 
      uppercase 
      tracking-[0.45em] 
      text-neutral-600
    "
  >
    {spacedTitle}
  </motion.h3>

  <span className="w-16 h-px bg-neutral-300" />
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {works.map((work, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15 
              }}
              className="group work-card block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-secondary">
                <motion.img 
                  src={work.image}
                  alt={work.title}
                  className="work-image w-full h-80 lg:h-96 object-cover transition-transform duration-700 ease-smooth"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{work.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{work.year}</span>
              </div>
              <h4 className="mt-2 text-2xl font-medium">{work.title}</h4>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
