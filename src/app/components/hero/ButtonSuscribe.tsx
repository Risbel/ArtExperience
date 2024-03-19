"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const ButtonSuscribe = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Link href={"/confirm"}>
        <Button size={"lg"}>Confirmar</Button>
      </Link>
    </motion.div>
  );
};

export default ButtonSuscribe;
