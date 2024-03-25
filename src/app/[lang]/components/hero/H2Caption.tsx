"use client";

import { motion } from "framer-motion";

const H2Caption = ({ lang }: { lang: string }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="lg:w-10/12 text-wrap text-center">
        <motion.h2
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl lg:text-5xl text-primary font-light"
        >
          {lang}
        </motion.h2>
      </div>
    </div>
  );
};

export default H2Caption;
