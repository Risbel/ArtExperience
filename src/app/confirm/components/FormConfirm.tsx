"use client";

import { addConfirmations } from "@/app/actions/confirmActions";
import { useRef } from "react";
import ConfirmButton from "./ConfirmButton";

const FormConfirm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <section id="formConfirm" className="flex justify-center w-full md:w-1/2 relative z-50 px-4 mb-8 md:mb-0 pt-12">
      <div className="lg:w-2/3 flex flex-col items-center border-2 p-4 md:p-6 rounded-xl border-primary backdrop-blur-md">
        <div className="flex flex-col w-full mb-4">
          <p className="text-xl md:text-2xl text-center text-primary">Suscríbase aquí!</p>
        </div>

        <form
          ref={ref}
          action={async (formData) => {
            await addConfirmations(formData);
            ref.current?.reset();
          }}
          className="flex flex-col gap-2 w-full"
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

          <ConfirmButton />
        </form>
      </div>
    </section>
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
