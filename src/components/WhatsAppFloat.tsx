import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ Official WhatsApp icon

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+201289757885"; // 🔹 Replace with your actual WhatsApp number
    const message = "Hello! I'd like to get in touch.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
    >
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)', // WhatsApp green gradient
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 text-white" />

        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-green-400/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-card/90 backdrop-blur-md rounded-lg shadow-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <span className="text-sm font-medium text-foreground">Chat on WhatsApp</span>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-card rotate-45 border-l border-b border-border/50"></div>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppFloat;
