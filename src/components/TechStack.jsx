const techs = ["React", "Python", "Node.js", "AWS", "Docker", "TensorFlow", "Raspberry Pi"];

const TechStack = () => {
  return (
    <section className="py-20 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-12">Tecnologie che utilizziamo</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech, idx) => (
            <span key={idx} className="px-6 py-3 rounded-full border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/10 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;