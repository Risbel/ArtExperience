"use server";

import { revalidateTag } from "next/cache";
import { IConfirmations } from "./confirmTypes";
import { Person } from "../confirm/components/GuestsInput";

export const addConfirmations = async (e: FormData, inputList: Person[]) => {
  try {
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
  } catch (error) {
    return {
      error,
    };
  }
};

export const getConfirmations = async () => {
  try {
    const res = await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
      cache: "no-cache",
      next: {
        tags: ["subscriptions"],
      },
    });
    const subscriptions: IConfirmations = await res.json();
    return subscriptions;
  } catch (error) {
    return {
      error,
    };
  }
};
