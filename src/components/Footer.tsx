import { motion } from "framer-motion";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

const moreLinks = [
  { label: "Contact", href: "/contact" },
  { label: "StyleGuide", href: "/style-guide" },
  { label: "Changelog", href: "/changelog" },
  { label: "Licenses", href: "/licenses" },
  { label: "Instructions", href: "/instructions" },
];

const Footer = () => {
  const spacedTitle = "Design is Our Passion.".split("").join("    ");

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h5 className="text-xl font-medium mb-4">Styler.</h5>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A dynamic agency dedicated to bringing your ideas to life. Where creativity meets purpose.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src="https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e77560_twitter.png"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src="https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e77624_instagram-black.webp"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src="https://cdn.prod.website-files.com/689989c2270f878736e77521/689989c2270f878736e7761d_facebook-black.webp"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h6 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Explore
            </h6>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="footer-link inline-block"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label.split("").map((char, i) => (
                      <span key={i} className="inline-block">{char}</span>
                    ))}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h6 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              More
            </h6>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="footer-link inline-block"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label.split("").map((char, i) => (
                      <span key={i} className="inline-block">{char}</span>
                    ))}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h6 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Contacts
            </h6>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>XYZ Times Sq, New York,<br />United States</p>
              <p>hello@styler.com</p>
              <p>+1 023-456-789</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-center tracking-[0.3em] text-muted-foreground mb-6">
            {spacedTitle}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-muted-foreground">
            <span>Built by <a href="#" className="hover:text-foreground transition-colors">Yves Adrales</a></span>
            <span className="hidden md:inline">•</span>
            <span>Powered by <a href="https://webflow.com" className="hover:text-foreground transition-colors">Webflow</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
