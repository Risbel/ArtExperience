"use client";
import { motion } from "framer-motion";

const H3Caption = () => {
  return (
    <div className="flex justify-center px-8">
      <motion.h3
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-wrap text-center font-bold text-lg lg:text-3xl"
      >
        <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#484532,45%,#89896c,55%,#484532)] bg-[length:250%_100%] bg-clip-text text-transparent">
          Disfrute de 3 artistas pintando en vivo!
        </span>
      </motion.h3>
    </div>
  );
};

export default H3Caption;
