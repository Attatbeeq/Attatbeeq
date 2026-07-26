import { useState } from "react";

const AIChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Benvenuto! Sono Attatbeeq AI. 🤖 Come posso aiutarti oggi? (Siti web, App, ERP...)" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simula risposta AI e invio a te
    setTimeout(() => {
      const aiReply = { 
        sender: "ai", 
        text: "Grazie per il messaggio! Un nostro esperto (Fakhreddine) ha ricevuto la tua richiesta e ti risponderà a brevissimo su WhatsApp. Nel frattempo, i nostri prezzi partono da 500€ (con 100€ di sconto per nuovi clienti!)." 
      };
      setMessages((prev) => [...prev, aiReply]);
      
      // Qui invia la richiesta direttamente al tuo WhatsApp
      const text = encodeURIComponent(`Nuova richiesta dal sito: ${userMsg.text}`);
      window.open(`https://wa.me/393511441585?text=${text}`, '_blank');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-[#0B0F0E]/95 backdrop-blur-xl border border-[#D4AF37]/50 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)] flex flex-col overflow-hidden transition-all">
      {/* Header */}
      <div className="bg-[#D4AF37] p-4 flex justify-between items-center">
        <h3 className="text-[#0B0F0E] font-bold text-lg">Attatbeeq AI</h3>
        <button onClick={onClose} className="text-[#0B0F0E] hover:text-white text-2xl leading-none">&times;</button>
      </div>
      
      {/* Messaggi */}
      <div className="h-80 overflow-y-auto p-4 space-y-3 bg-black/40">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.sender === "user" 
                ? "bg-[#D4AF37] text-[#0B0F0E] rounded-br-none" 
                : "bg-white/10 text-white border border-white/10 rounded-bl-none"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/10 flex gap-2 bg-[#0B0F0E]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Scrivi la tua richiesta..."
          className="flex-1 bg-white/5 text-white px-4 py-2 rounded-full text-sm outline-none border border-white/10 focus:border-[#D4AF37]"
        />
        <button 
          onClick={handleSend}
          className="bg-[#D4AF37] text-[#0B0F0E] p-2 rounded-full hover:bg-[#F3E5AB] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AIChat;