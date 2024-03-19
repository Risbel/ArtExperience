"use client";

import { motion } from "framer-motion";

const H4Date = () => {
  return (
    <div className="flex justify-center">
      <motion.h4
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-10/12 lg:text-lg text-primary font-semibold"
      >
        TE ESPERAMOS EL 20 DE ABRIL DE 2024 A LAS 18:00 HRS EN ROKABELLA
      </motion.h4>
    </div>
  );
};

export default H4Date;
