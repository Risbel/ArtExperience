"use client";
import { motion } from "framer-motion";

const H3Caption = ({ lang }: { lang: string }) => {
  const separatedText = lang.split(" ");

  return (
    <div className="flex justify-center">
      <motion.h3
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-wrap text-center font-light text-lg lg:text-3xl"
      >
        <div className="flex flex-wrap justify-center pb-2 animate-background-shine bg-[linear-gradient(110deg,#484532,45%,#89896c,55%,#484532)] bg-[length:250%_100%] bg-clip-text text-transparent">
          {separatedText.map((word, i) => {
            return (
              <span key={i} className="pl-2">
                {word}
              </span>
            );
          })}
        </div>
      </motion.h3>
    </div>
  );
};

export default H3Caption;
