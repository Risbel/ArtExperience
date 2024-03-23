"use client";

import { LockIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LinkEncoded = () => {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);

  const redirectEncoded = () => {
    setClickCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  useEffect(() => {
    if (clickCount > 5) {
      router.push("/confirmations");
    }
  }, [clickCount]);

  return (
    <button
      className="hover:-translate-y-[3px] hover:shadow-lg transition-transform duration-300"
      onClick={redirectEncoded}
    >
      <LockIcon className="stroke-primary fill-white/80" />
    </button>
  );
};

export default LinkEncoded;
