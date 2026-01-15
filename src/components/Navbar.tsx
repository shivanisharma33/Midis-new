import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/midis-logo.png";

/* ================= DATA ================= */

const navItems = {
  services: [
    {
      label: "Design",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d10d0123c0be15052ede_Glossy%20Tote%20Bags%20on%20Vibrant%20Background.webp",
    },
    {
      label: "Marketing",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d1498f8548f8568bc6f7_Pastel%20Sneakers%20Display.webp",
    },
    {
      label: "Prototype",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d16b259fd242a0ee6c1e_Modern%20Device%20Close-Up.webp",
    },
    {
      label: "Branding",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77534/68a2d19782c018e44a110307_Modern%20Elegance_%20Tech%20%26%20Texture.webp",
    },
  ],
  works: [
    {
      label: "Elegant",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66a24a7a04635323b86_Cheerful%20Young%20Woman%20with%20Colorful%20Attire.webp",
    },
    {
      label: "Digital",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bdd829a2fb5a6dc35_Fashion%20Portrait%20with%20Vibrant%20Hat.webp",
    },
    {
      label: "Vibrant",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77521/6899f66bbac017f6a400b614_Stylized%20Graffiti-Inspired%20Robot.webp",
    },
    {
      label: "Texture",
      image:
        "https://cdn.prod.website-files.com/689989c2270f878736e77521/68a05fd7ef83f7891c8de8cf_Vivid%20Portrait%20with%20Bold%20Colors.webp",
    },
  ],
};

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 w-full z-50 flex justify-center px-4"
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-xl rounded-full px-6 py-2 shadow-2xl border border-black/10">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <a href="/about" className="px-4 py-2 hover:text-coral">
            About
          </a>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false);
              setHoveredItem(null);
            }}
          >
            <a
              href="/services"
              className="px-4 py-2 flex items-center gap-1 hover:text-coral"
            >
              Services <ChevronDown className="w-4 h-4" />
            </a>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] bg-white/90 backdrop-blur-2xl rounded-3xl p-4 border border-black/10"
                >
                  <div className="flex gap-4">
                    {hoveredItem && (
                      <motion.img
                        key={hoveredItem}
                        src={
                          navItems.services.find(
                            (i) => i.label === hoveredItem
                          )?.image
                        }
                        className="w-32 h-32 rounded-xl object-cover"
                      />
                    )}
                    <div className="flex flex-col">
                      {navItems.services.map((item) => (
                        <a
                          key={item.label}
                          href="/services"
                          onMouseEnter={() => setHoveredItem(item.label)}
                          className="px-4 py-2 hover:bg-black/5 rounded-lg"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* LOGO */}
        <a
          href="/"
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden"
        >
          <img src={logo} alt="MIDIS Logo" className="w-full h-full object-contain" />
        </a>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <div
            className="relative"
            onMouseEnter={() => setWorksOpen(true)}
            onMouseLeave={() => {
              setWorksOpen(false);
              setHoveredItem(null);
            }}
          >
            <button className="px-4 py-2 flex items-center gap-1 hover:text-coral">
              Works <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {worksOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 w-[260px] bg-white/90 backdrop-blur-2xl rounded-3xl p-4 border border-black/10"
                >
                  <div className="flex gap-4">
                    {hoveredItem && (
                      <motion.img
                        key={hoveredItem}
                        src={
                          navItems.works.find(
                            (i) => i.label === hoveredItem
                          )?.image
                        }
                        className="w-32 h-32 rounded-xl object-cover"
                      />
                    )}
                    <div className="flex flex-col">
                      {navItems.works.map((item) => (
                        <a
                          key={item.label}
                          href="/works"
                          onMouseEnter={() => setHoveredItem(item.label)}
                          className="px-4 py-2 hover:bg-black/5 rounded-lg"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#contact" className="px-4 py-2 hover:text-coral">
            Contact
          </a>
        </div>
      </div>

      {/* ================= MOBILE BAR ================= */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[94%] bg-white/90 backdrop-blur-xl rounded-full px-4 py-3 flex items-center justify-between border border-black/10 z-50">
        <button onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>

        <a
          href="/"
          className="w-9 h-9 rounded-full bg-black flex items-center justify-center overflow-hidden"
        >
          <img src={logo} alt="MIDIS Logo" className="w-full h-full object-contain" />
        </a>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white rounded-t-[32px] shadow-2xl"
            >
              <div className="flex justify-center pt-3">
                <span className="w-12 h-1.5 rounded-full bg-black/20" />
              </div>

              <div className="flex justify-between items-center px-6 py-5">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="px-6 pb-8 space-y-8">
                {/* UPDATED LINKS */}
                <div className="space-y-4">
                  <a href="/about" className="block text-2xl font-medium">About</a>
                  <a href="/works" className="block text-2xl font-medium">Works</a>
                  <a href="/blogs" className="block text-2xl font-medium">Blogs</a>
                  <a href="/contact" className="block text-2xl font-medium">Contact Us</a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {navItems.services.map((item) => (
                      <a
                        key={item.label}
                        href="/services"
                        className="relative rounded-2xl overflow-hidden"
                      >
                        <img src={item.image} className="w-full h-28 object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                          <span className="text-white font-medium">{item.label}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="block w-full text-center py-4 rounded-full bg-black text-white font-medium"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
