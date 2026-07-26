import { useState } from "react";
import { Link } from "react-router-dom";

const ConsulenzaPage = () => {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mykqnnkj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const err = await response.json();
        setErrorMsg(err.error || "Errore sconosciuto");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Errore di rete. Riprova più tardi.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#0B0F0E] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">Messaggio inviato!</h2>
          <p className="text-white/80 mb-8">
            Grazie per averci contattato. Ti risponderemo al più presto.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-[#D4AF37] text-[#0B0F0E] font-bold rounded-full hover:bg-[#D4AF37]/80 transition-all"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F0E] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-[#D4AF37] hover:underline mb-6 inline-block text-lg">
          &larr; Torna alla Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8">
          Richiedi una consulenza
        </h1>
        <p className="text-white/70 mb-10">
          Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con una proposta personalizzata.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            required
            disabled={status === "submitting"}
            className="bg-transparent border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            disabled={status === "submitting"}
            className="bg-transparent border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
          />
          <textarea
            name="messaggio"
            rows={5}
            placeholder="Descrivi il tuo progetto..."
            required
            disabled={status === "submitting"}
            className="bg-transparent border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
          ></textarea>

          {status === "error" && (
            <p className="text-red-400 text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-8 py-4 bg-[#D4AF37] text-[#0B0F0E] font-bold rounded-full hover:bg-[#D4AF37]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Invio in corso..." : "Invia richiesta"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsulenzaPage;