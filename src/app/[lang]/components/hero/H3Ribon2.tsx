"use client";

import { motion } from "framer-motion";

const H3Ribbon2 = ({ lang }: { lang: string }) => {
  return (
    <div className="relative z-20 bg-primary w-full flex justify-center items-center shadow-lg shadow-gray-500 py-3 px-2">
      <motion.h3
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-sm text-center font-thin tracking-widest text-primary-foreground"
      >
        {lang}
      </motion.h3>
    </div>
  );
};

export default H3Ribbon2;
