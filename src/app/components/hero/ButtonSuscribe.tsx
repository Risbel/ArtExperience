import { Button } from "@/components/ui/button";
import Link from "next/link";

const ButtonSuscribe = () => {
  return (
    <Button size={"lg"}>
      <Link href={"/confirm"}>Confirmar</Link>{" "}
    </Button>
  );
};

export default ButtonSuscribe;
