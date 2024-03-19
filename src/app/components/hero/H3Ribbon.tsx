"use client";
import { motion } from "framer-motion";

const H3Ribbon = () => {
  return (
    <div className="relative z-20 bg-primary w-full flex justify-center items-center shadow-lg shadow-gray-500 py-3">
      <motion.h3
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl lg:text-6xl font-light tracking-widest text-primary-foreground"
      >
        INVITACIÓN
      </motion.h3>
    </div>
  );
};

export default H3Ribbon;
