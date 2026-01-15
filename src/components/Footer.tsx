import React from "react";

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
                <span className="cursor-pointer hover:text-white transition">X</span>
                <span className="cursor-pointer hover:text-white transition">◎</span>
                <span className="cursor-pointer hover:text-white transition">f</span>
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="text-xs tracking-widest text-white/40 mb-4 sm:mb-6 uppercase">
                Explore
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Works</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* MORE */}
            <div>
              <p className="text-xs tracking-widest text-white/40 mb-4 sm:mb-6 uppercase">
                More
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li>Contact</li>
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Instructions</li>
              </ul>
            </div>

            {/* CONTACTS */}
            <div>
              <p className="text-xs tracking-widest text-white/40 mb-4 sm:mb-6 uppercase">
                Contacts
              </p>
              <div className="text-sm space-y-3 sm:space-y-4 text-white/80">
                <p>
                  XYZ Times Sq, New York,
                  <br />
                  United States
                </p>
                <p>hello@midis.com</p>
                <p>+1 023-456-789</p>
              </div>
            </div>
          </div>

          {/* BIG TYPOGRAPHY */}
          <div className="pt-12 sm:pt-16 lg:pt-24">
            <h1 className="text-[44px] sm:text-[72px] md:text-[100px] lg:text-[140px] xl:text-[160px] leading-[0.95] font-bold tracking-tight">
              Design is Our
              <br />
              Passion.
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
