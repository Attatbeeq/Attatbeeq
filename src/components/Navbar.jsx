import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Progetti", href: "/#progetti" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Contatti", href: "/#contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname !== "/") return;
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }
      const sections = menuItems
        .filter((item) => item.href.startsWith("/#"))
        .map((item) => item.href.replace("/#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#0B0F0E] backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo responsive */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <span
              className="text-[#D4AF37] leading-none text-[6rem] md:text-[10rem] lg:text-[16rem]"
              style={{ fontFamily: "'Amiri', serif" }}
              translate="no"
              lang="ar"
            >
              ء
            </span>
            <span className="text-white text-lg md:text-xl font-bold tracking-wider" translate="no">
              Attatbeeq Engine
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === item.href.replace("/#", "")
                    ? "text-[#D4AF37] font-semibold"
                    : "text-white/70 hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-wider py-2 transition-colors duration-200 ${
                  activeSection === item.href.replace("/#", "")
                    ? "text-[#D4AF37] font-semibold"
                    : "text-white/70 hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;