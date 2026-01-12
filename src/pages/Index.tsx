import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MarqueeImages from "@/components/MarqueeImages";
import FeaturedWorks from "@/components/FeaturedWorks";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <MarqueeImages />
      <FeaturedWorks />
      <Services />
      <Brands />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
