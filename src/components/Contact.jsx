const Contact = () => {
  return (
    <section id="contatti" className="py-12 sm:py-20 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#D4AF37] mb-10 sm:mb-16">Contattaci</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Form */}
          <form
            action="https://formspree.io/f/mykqnnkj"
            method="POST"
            className="flex flex-col gap-5 sm:gap-6"
          >
            <input type="text" name="nome" placeholder="Nome" required className="bg-transparent border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]" />
            <input type="email" name="email" placeholder="Email" required className="bg-transparent border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]" />
            <textarea rows={5} name="messaggio" placeholder="Messaggio" required className="bg-transparent border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"></textarea>
            <button type="submit" className="px-8 py-4 bg-[#D4AF37] text-[#0B0F0E] font-bold rounded-full hover:bg-[#D4AF37]/80 transition-colors">Invia</button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center gap-4 sm:gap-6 text-white/80">
            <p><strong className="text-[#D4AF37]">Email:</strong>{" "}
              <a href="mailto:attabeeq@gmail.com" className="hover:text-[#D4AF37] transition-colors">attabeeq@gmail.com</a>
            </p>
            <p><strong className="text-[#D4AF37]">Telefono:</strong>{" "}
              <a href="tel:+393511441585" className="hover:text-[#D4AF37] transition-colors">+39 351 1441585</a>
            </p>
            <p>
              <strong className="text-[#D4AF37]">Indirizzo:</strong><br />
              <span translate="no">Attatbeeq Engine</span><br />
              Via Mulino di Borello 525<br />
              47522 Cesena (FC)
            </p>
          </div>
        </div>

        {/* Mappa */}
        <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 h-48 sm:h-64 md:h-80">
          <iframe
            title="Mappa Attatbeeq Engine"
            src="https://www.google.com/maps?q=Via+Mulino+di+Borello+525,+47522+Cesena+FC&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;