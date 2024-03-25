"use client";

import { motion } from "framer-motion";

const H4Date = ({ lang }: { lang: string }) => {
  return (
    <div className="flex justify-center">
      <motion.h4
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-10/12 text-xs lg:text-lg text-primary font-semibold"
      >
        {lang}
      </motion.h4>
    </div>
  );
};

export default H4Date;
