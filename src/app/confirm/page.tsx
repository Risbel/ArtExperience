import React from "react";
import FormConfirm from "./components/FormConfirm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const Confirm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="opacity-35 absolute z-0 h-full"
        id="patternIdForm"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="form"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
            patternTransform="scale(1) rotate(180)"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="hsla(47, 100%, 96%, 1)" />
            <path
              d="M12.47 0H0v12.47h12.47Zm0 0v12.47l9.18 9.18V0ZM0 21.65v9.18h30.83l-9.18-9.18zm21.65 0-9.18-9.18H0v9.18zm0 0 9.18 9.18V0h-9.18ZM30.83 0v30.83L40 40V0ZM0 30.83V40h40l-9.17-9.17z"
              strokeWidth="1"
              stroke="hsla(39, 14%, 40%, 1)"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" transform="translate(0,0)" fill="url(#form)" />
      </svg>

      <Link
        className="flex items-center absolute z-20  left-4 top-4 lg:left-8 lg:top-8 text-xl text-primary bg-secondary border-2 border-primary pl-2 pr-4 py-1 rounded-xl hover:bg-[#bcb9978a] transition-colors group"
        href={"/"}
      >
        <ChevronLeft className="group-hover:-translate-x-2 transition-transform duration-500" /> Back
      </Link>
      <FormConfirm />
    </div>
  );
};

export default Confirm;
