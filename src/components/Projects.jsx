const projects = [
  { title: "Piattaforma IoT Industriale", desc: "Monitoraggio in tempo reale di sensori industriali.", tags: ["IoT", "AWS", "React"] },
  { title: "E-commerce B2B", desc: "Soluzione wholesale per un'azienda di moda.", tags: ["E-commerce", "Node.js", "MongoDB"] },
  { title: "App AI per Diagnostica", desc: "Analisi predittiva basata su machine learning.", tags: ["AI", "Python", "TensorFlow"] },
];

const Projects = () => {
  return (
    <section id="progetti" className="py-20 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#D4AF37] mb-16">Progetti recenti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-[#0B0F0E] border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
              <p className="text-white/70 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;