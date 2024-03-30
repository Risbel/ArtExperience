"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const H2Caption = ({ lang }: { lang: string }) => {
  const langWords = lang.split(" ");

  return (
    <div className="flex justify-center w-full">
      <div className="lg:w-10/12 text-wrap text-center">
        <motion.h2 initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {langWords.map((word, i) => {
            if (word.startsWith("&")) {
              return (
                <span key={i}>
                  {word.replace("&", "")}
                  <br />
                </span>
              );
            } else if (word.startsWith("^")) {
              return (
                <span className="text-xl lg:text-3xl text-primary pl-2" key={i}>
                  {word.replace("^", "")}
                </span>
              );
            }
          })}
          <div className="flex flex-wrap justify-center">
            {langWords.map((word, i) => {
              if (!word.startsWith("^") && !word.startsWith("&")) {
                return (
                  <span
                    key={i}
                    className="pl-1 text-md md:text-xl lg:text-2xl text-transparent text-shadow shadow-[#94805774] font-bold animate-background-shine bg-[linear-gradient(110deg,#332f14,45%,#89896c,55%,#24210c)] bg-[length:250%_100%] bg-clip-text"
                  >
                    {word}
                  </span>
                );
              }
            })}
          </div>
        </motion.h2>
      </div>
    </div>
  );
};

export default H2Caption;
