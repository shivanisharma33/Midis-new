import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-16 sm:py-20 lg:py-28">
      {/* OUTER CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLACK FOOTER CARD */}
        <div className="bg-[#0b0b0b] rounded-2xl sm:rounded-[28px] lg:rounded-[36px] px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-24 text-white">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-20 pb-16 sm:pb-20 lg:pb-24 border-b border-white/10">

            {/* BRAND */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Midis.
              </h3>

              <p className="text-sm text-white/70 leading-relaxed max-w-xs mb-6 sm:mb-8">
                A dynamic agency dedicated to bringing your ideas to life.
                Where creativity meets purpose.
              </p>

              {/* SOCIAL ICONS */}
           
<div className="flex items-center gap-5 sm:gap-6 text-white/80">
  <a
    href="https://www.instagram.com/officialmidis/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-white transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61577942184075"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:text-white transition"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/midisresources/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-white transition"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://www.youtube.com/@MidisOfficial"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="hover:text-white transition"
  >
    <FaYoutube size={18} />
  </a>
</div>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="text-xs tracking-widest text-white/40 mb-4 sm:mb-6 uppercase">
                Explore
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/works">Works</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            {/* MORE */}
            <div>
              <p className="text-xs tracking-widest text-white/40 mb-4 sm:mb-6 uppercase">
                Our Services
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li><a href="/services">Web Development</a></li>
                <li><a href="/services">Web Designing</a></li>
                <li><a href="/services">Graphic Design</a></li>
                <li><a href="/services">Content Writing</a></li>
                <li><a href="/services">Video Editing</a></li>
              </ul>
            </div>

            {/* CONTACTS */}
            <div>
              <p className="text-xs tracking-widest text-white/40 mb-4 sm:mb-6 uppercase">
                Contacts
              </p>
              <div className="text-sm space-y-3 sm:space-y-4 text-white/80">
                <p>
              1st Floor, E 279, Industrial Area,

                  <br />
                 Sector 75, S.A.S Nagar, Punjab
160055
                </p>
                <p>hello@midis.in</p>
                <p>🇮🇳 +91 97793 20626</p>
                 <p>🇺🇸 +1 (862) 295-0117</p>
              </div>
            </div>
          </div>

          {/* BIG TYPOGRAPHY */}
        <div className="pt-12 sm:pt-16 lg:pt-24">
  <h1 className="text-[44px] sm:text-[72px] md:text-[100px] lg:text-[140px] xl:text-[160px] leading-[0.95] font-bold tracking-tight">
    Design is Our
    <br />
    <span className="inline-block mt-6 sm:mt-8 lg:mt-10">
      Passion.
    </span>
  </h1>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
