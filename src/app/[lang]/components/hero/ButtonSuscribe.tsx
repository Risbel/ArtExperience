"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Locale } from "@/configs/i18n.config";
import { useDictionary } from "@/providers/DictionaryProvider";

const ButtonSuscribe = ({ lang }: { lang: Locale }) => {
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
