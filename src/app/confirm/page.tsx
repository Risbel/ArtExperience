import React from "react";
import FormConfirm from "./components/FormConfirm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const Confirm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link
        className="flex items-center absolute left-4 top-4 lg:left-8 lg:top-8 text-xl text-primary bg-secondary pl-2 pr-4 py-1 rounded-xl hover:bg-[#bcb9978a] transition-colors group"
        href={"/"}
      >
        <ChevronLeft className="group-hover:-translate-x-2 transition-transform duration-500" /> Back
      </Link>
      <FormConfirm />
    </div>
  );
};

export default Confirm;
