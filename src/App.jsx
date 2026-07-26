import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";
import ServiceDetailPage from "./components/ServiceDetailPage";
import ConsulenzaPage from "./components/ConsulenzaPage";
import PageTransition from "./components/PageTransition";
import ScrollToHash from "./components/ScrollToHash"; // 👈 nuovo import
import ChatAIButton from "./components/ChatAIButton";
import ParticlesBackground from "./components/ParticlesBackground";
import AIChat from "./components/AIChat";


function AnimatedRoutes() {
  const location = useLocation();
  const [highlightServices, setHighlightServices] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
         <ParticlesBackground />
      <Routes location={location} key={location.pathname}>
        {/* Home page */}
        <Route path="/" element={
          <PageTransition>
            <ScrollToHash />   {/* 👈 aggiunto qui: gestisce lo scroll all'ancora */}
            <Navbar />
            <FadeInSection><Hero setHighlightServices={setHighlightServices} /></FadeInSection>
            <FadeInSection><Services highlight={highlightServices} setHighlight={setHighlightServices} /></FadeInSection>
            <FadeInSection><TechStack /></FadeInSection>
            <FadeInSection><WhyChooseUs /></FadeInSection>
            <FadeInSection><Projects /></FadeInSection>
            <FadeInSection><FAQ /></FadeInSection>
            <FadeInSection><About /></FadeInSection>
            <FadeInSection><Contact /></FadeInSection>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
            <ChatAIButton onClick={() => setIsChatOpen(true)} />
            <CookieBanner />
          </PageTransition>
        } />
        {/* Pagina servizio */}
        <Route path="/servizi/:serviceIndex" element={
          <PageTransition>
            <Navbar />
            <ServiceDetailPage />
            <Footer />
          </PageTransition>
        } />
        {/* Pagina consulenza */}
        <Route path="/consulenza" element={
          <PageTransition>
            <Navbar />
            <ConsulenzaPage />
            <Footer />
          </PageTransition>
        } />
      </Routes>
     <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;