import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato in questa sessione
    const consent = sessionStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Salva la scelta nel sessionStorage (si cancella chiudendo il browser)
    sessionStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  // Se ha già accettato, non renderizza nulla
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#0B0F0E]/95 backdrop-blur-md border-t border-[#D4AF37]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm sm:text-base text-center sm:text-left">
          Utilizziamo i cookie per migliorare la tua esperienza di navigazione. 
          Continuando ad utilizzare il sito, accetti l'utilizzo dei cookie.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[#D4AF37] text-[#0B0F0E] px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base hover:bg-[#b5952f] transition-colors whitespace-nowrap shadow-lg hover:shadow-[#D4AF37]/20"
        >
          Accetta e chiudi
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;