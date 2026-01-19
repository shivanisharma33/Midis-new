import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MarqueeImages from "@/components/MarqueeImages";
// import FeaturedWorks from "@/components/FeaturedWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatYouGain from "@/components/WhatYouGain";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";


import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <MarqueeImages />
      {/* <FeaturedWorks /> */}
  
    <WhyChooseUs />
    
    {/* <whymidis /> */}
      <Services />
      <WhatYouGain />
        {/* FAQ SECTION */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
