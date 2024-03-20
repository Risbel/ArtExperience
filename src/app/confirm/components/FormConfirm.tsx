"use client";

import { addConfirmations } from "@/app/actions/confirmActions";
import { useRef, useState } from "react";
import ConfirmButton from "./ConfirmButton";
import GuestsInput, { Person } from "./GuestsInput";
import { redirect } from "next/navigation";

const FormConfirm = () => {
  const [inputList, setInputList] = useState<Person[]>([]);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="flex flex-col border-2 p-4 md:p-6 rounded-xl border-primary backdrop-blur-3xl">
      <div className="flex flex-col w-full mb-4">
        <p className="text-md md:text-2xl text-center text-primary">Confirme su asistencia!</p>
      </div>

      <form
        ref={ref}
        action={async (formData) => {
          await addConfirmations(formData, inputList);
          ref.current?.reset();
          redirect("/");
        }}
        className="flex flex-col w-full"
      >
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="name">
            Full name
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder="Full name"
            min={2}
            type="text"
            name="name"
            id="name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="email">
            Email
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder="Email"
            min={2}
            type="email"
            name="email"
            id="email"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="phone">
            Phone
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder="phone"
            min={2}
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="address">
            Address (optional)
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder="Address"
            min={2}
            type="text"
            name="address"
            id="address"
            autoComplete="address-level1"
          />
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="company">
            Company (optional)
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder="Company"
            min={2}
            type="text"
            name="company"
            id="company"
            autoComplete="off"
          />
        </div>
        <GuestsInput inputList={inputList} setInputList={setInputList} />

        <ConfirmButton />
      </form>
    </div>
  );
};

export default FormConfirm;

export interface IPostSubscriptionsResp {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  company: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
