"use server";

import { revalidateTag } from "next/cache";
import { IConfirmations } from "./confirmTypes";
import { Person } from "../app/confirm/components/GuestsInput";

export const addConfirmations = async (e: FormData, inputList: Person[]) => {
  const name = e.get("name")?.toString();
  const phone = e.get("phone")?.toString();
  const email = e.get("email")?.toString();
  const address = e.get("address")?.toString();
  const company = e.get("company")?.toString();
  const guests: Person[] = inputList;

  if (!name || !phone || !email) {
    return;
  }

  const newSubscription = {
    name,
    phone,
    email,
    address,
    company,
    guests,
  };

  await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
    method: "POST",
    body: JSON.stringify(newSubscription),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("subscriptions");
};

export const getConfirmations = async () => {
  const res = await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
    next: {
      tags: ["subscriptions"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const subscriptions: IConfirmations = await res.json();

  return subscriptions;
};
