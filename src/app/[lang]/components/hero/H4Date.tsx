"use client";

import { motion } from "framer-motion";

const H4Date = ({ lang }: { lang: string }) => {
  const langWords = lang.split(" ");

  return (
    <div className="flex justify-center">
      <motion.h4
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center w-10/12 text-xs lg:text-lg text-primary"
      >
        {langWords.map((word, i) => {
          if (word.startsWith("*")) {
            return (
              <span key={i} className="pl-2 font-bold">
                {word.replace("*", "")}
              </span>
            );
          }
          return (
            <span key={i} className="pl-2">
              {word}
            </span>
          );
        })}
      </motion.h4>
    </div>
  );
};

export default H4Date;
