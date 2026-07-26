import { useParams, Link } from "react-router-dom";
import { services } from "../data/servicesData";

const ServiceDetailPage = () => {
  const { serviceIndex } = useParams();
  const service = services[parseInt(serviceIndex)];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0B0F0E] flex flex-col items-center justify-center px-4">
        <p className="text-white text-xl sm:text-2xl mb-4">Servizio non trovato</p>
        <Link to="/" className="text-[#D4AF37] underline text-lg">Torna alla Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F0E] py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-[#D4AF37] hover:underline mb-4 sm:mb-6 inline-block text-base sm:text-lg">
          &larr; Torna ai servizi
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6 sm:mb-8">{service.title}</h1>

        <p className="text-white/80 leading-relaxed text-base sm:text-lg whitespace-pre-line">
          {service.long}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;