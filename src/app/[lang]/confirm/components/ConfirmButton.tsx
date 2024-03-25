import { Button } from "@/components/ui/button";
import { Locale } from "@/configs/i18n.config";
import { useDictionary } from "@/providers/DictionaryProvider";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const ConfirmButton = () => {
  const { pending } = useFormStatus();

  const { form } = useDictionary();

  return (
    <Button className="my-2" type="submit">
      <span className="font-semibold text-secondary">
        {!pending ? `${form.buttons.confirm}` : <Loader2 className="animate-spin stroke-secondary" />}
      </span>
    </Button>
  );
};

export default ConfirmButton;
