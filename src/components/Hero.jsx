import { Link } from "react-router-dom";

const Hero = ({ setHighlightServices }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20 sm:py-32">
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Badge Sconto */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 backdrop-blur-sm animate-pulse">
          <span className="bg-[#D4AF37] text-[#0B0F0E] text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
          <span className="text-[#D4AF37] text-sm font-semibold">100€ di sconto per i nuovi clienti!</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          Sviluppo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Siti Web</span> e <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">App Android & iPhone</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
          Soluzioni digitali su misura per far crescere la tua attività
        </p>

        {/* Box Prezzi */}
        <div className="inline-block bg-white/5 border border-[#D4AF37]/30 rounded-2xl p-6 mb-12 backdrop-blur-md">
          <p className="text-white/80 text-sm uppercase tracking-widest mb-2 font-semibold">
            Investimento a partire da
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">500€</span>
            <span className="text-white/40 text-lg">- 1500€</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link 
            to="/consulenza" 
            className="w-full sm:w-auto bg-[#D4AF37] text-[#0B0F0E] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#F3E5AB] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            Richiedi Preventivo
          </Link>
          
          <Link 
            to="/#servizi" 
            onClick={() => setHighlightServices(true)}
            className="w-full sm:w-auto border-2 border-[#D4AF37]/50 text-[#D4AF37] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all backdrop-blur-sm"
          >
            Scopri i Servizi ↓
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;