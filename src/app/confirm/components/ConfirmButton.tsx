import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const ConfirmButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit">
      <span className="font-semibold text-secondary">{!pending ? "Suscribirme" : "Loading..."}</span>
    </Button>
  );
};

export default ConfirmButton;
