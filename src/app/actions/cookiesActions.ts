"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const accessToConfirmations = (e: FormData) => {
  const name = e.get("userName")?.toString();
  const pass = e.get("password")?.toString();

  if (!name || !pass) {
    return;
  }

  cookies().set("userName", name, {
    domain: "art-experience.pages",
    expires: 1 / 86400,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  cookies().set("password", pass, {
    domain: "art-experience.pages",
    expires: 1 / 86400,
    secure: true,
    sameSite: "none",
    path: "/",
  });

  redirect("/confirmations");
};
