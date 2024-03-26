"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDictionary } from "@/providers/DictionaryProvider";
import { usePathname } from "next/navigation";

const ButtonSuscribe = () => {
  const lang = usePathname();
  const { home } = useDictionary();

  return (
    <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Link href={`${lang}/confirm/`}>
        <Button size={"lg"}>{home.button}</Button>
      </Link>
    </motion.div>
  );
};

export default ButtonSuscribe;
