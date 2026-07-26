const Footer = () => {
  return (
    <footer className="bg-[#0B0F0E] border-t border-[#D4AF37]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-white/50 text-sm">
        <p translate="no">© 2026 Attatbeeq Engine. Tutti i diritti riservati.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37]">Termini di Servizio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;