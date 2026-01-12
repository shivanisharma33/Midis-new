import { motion } from "framer-motion";

const brands = [
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778c2_TerraLight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778c4_ProLineLight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778c3_PentaLight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778db_PinpointLight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778dc_InvertLight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778da_HitechLight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778c1_Iceberglight.svg",
  "https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e778c0_DuneLight.svg",
];

const Brands = () => {
  return (
    <section className="py-16 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-sm text-muted-foreground text-center">
          We worked with brands across the globe.
        </p>
      </div>
      
      <div className="relative">
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ x: [0, -1200] }}
          transition={{ 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...brands, ...brands, ...brands].map((src, index) => (
            <img 
              key={index}
              src={src}
              alt="Brand logo"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 invert"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
