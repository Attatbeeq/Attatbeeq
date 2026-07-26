import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="min-h-screen bg-[#0B0F0E]"
  >
    {children}
  </motion.div>
);

export default PageTransition;