import { useState } from "react";

const faqData = [
  {
    question: "Quali tecnologie utilizzate?",
    answer:
      "Utilizziamo React, Node.js, Python, AWS, Docker e molti altri stack moderni. Scegliamo la tecnologia più adatta al tuo progetto.",
  },
  {
    question: "Quanto costa un progetto software?",
    answer:
      "Ogni progetto è su misura. Dopo una consulenza gratuita, ti forniamo un preventivo dettagliato senza impegno.",
  },
  {
    question: "Offrite assistenza dopo la consegna?",
    answer:
      "Sì, offriamo pacchetti di manutenzione e supporto continuo per garantire che il tuo software sia sempre aggiornato e funzionante.",
  },
  {
    question: "Quanto tempo serve per sviluppare un'app?",
    answer:
      "Dipende dalla complessità. Un'app semplice può richiedere 4-8 settimane. Durante la consulenza ti daremo una stima precisa.",
  },
  {
    question: "Fornite anche il design dell'interfaccia?",
    answer:
      "Certo! Abbiamo designer interni che curano l'esperienza utente e l'interfaccia grafica del tuo prodotto.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0B0F0E]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#D4AF37] mb-12">
          Domande Frequenti
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#D4AF37]/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-white hover:bg-[#D4AF37]/5 transition-colors"
              >
                <span className="font-medium pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5 px-6" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="text-white/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;