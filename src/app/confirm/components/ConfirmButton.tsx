import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const ConfirmButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="my-2" type="submit">
      <span className="font-semibold text-secondary">{!pending ? "Confirmar" : "Loading..."}</span>
    </Button>
  );
};

export default ConfirmButton;
