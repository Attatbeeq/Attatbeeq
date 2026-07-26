import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { useEffect } from "react";

const Services = ({ highlight, setHighlight }) => {

  useEffect(() => {
    if (highlight) {
      const timer = setTimeout(() => setHighlight(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [highlight, setHighlight]);

  return (
    <section
      id="servizi"
      className={`py-12 sm:py-20 bg-[#0B0F0E] transition-all duration-700 ${
        highlight ? "ring-4 ring-[#D4AF37] ring-offset-4 ring-offset-[#0B0F0E] rounded-2xl scale-[1.02]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-10 sm:mb-16">
          Cosa facciamo
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {services.map((svc, idx) => (
            <Link
              key={idx}
              to={`/servizi/${idx}`}
              className="p-4 sm:p-8 rounded-2xl bg-[#0B0F0E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group cursor-pointer block"
            >
              <div className="mb-3 sm:mb-4">{svc.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-1 sm:mb-2">{svc.title}</h3>
              <p className="text-white/70 text-sm sm:text-base line-clamp-2">{svc.short}</p>
              <span className="text-xs text-[#D4AF37] mt-2 block group-hover:underline">
                Scopri di più →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;