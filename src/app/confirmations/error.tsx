"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex justify-center items-center h-screen w-screen relative">
      <svg
        className="opacity-35 absolute z-0"
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
      <div className="flex flex-col gap-8 relative z-20">
        <h2 className="text-2xl lg:text-7xl text-primary font-bold shadow-gray-300 text-shadow-lg">
          Something went wrong!
        </h2>
        <div className="flex justify-center gap-8">
          <Button className="shadow-xl" onClick={() => reset()}>
            Try again
          </Button>
          <Button className="shadow-xl">
            <Link href={"/"}>Go to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
