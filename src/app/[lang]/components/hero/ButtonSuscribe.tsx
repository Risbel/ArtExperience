"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDictionary } from "@/providers/DictionaryProvider";
import { usePathname } from "next/navigation";
import { Loader } from "lucide-react";

const ButtonSuscribe = () => {
  const lang = usePathname();
  const { home } = useDictionary();

  return (
    <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Link href={`${lang}/confirm/`}>
        <button className="shadow-md shadow-primary inline-flex h-8 lg:h-12 animate-background-btshine items-center justify-center rounded-md bg-[linear-gradient(110deg,#605438,45%,#7f704a,55%,#605438)] bg-[length:200%_100%] px-4 lg:px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="font-medium text-white text-sm md:text-base">{home.button}</span>
        </button>
      </Link>
    </motion.div>
  );
};

export default ButtonSuscribe;
