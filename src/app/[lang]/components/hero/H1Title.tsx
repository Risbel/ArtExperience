"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const H1Title = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Image src={"/h1Title.svg"} width={600} height={260} alt="h1 title art experience" />
    </motion.div>
  );
};

export default H1Title;
