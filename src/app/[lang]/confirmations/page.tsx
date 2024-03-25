import { getConfirmations } from "@/actions/confirmActions";
import { IConfirmations } from "@/actions/confirmTypes";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Subscriptions = async () => {
  const confirmations: IConfirmations = await getConfirmations();

  return (
    <div className="relative">
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

      <div className="p-4 lg:p-16 relative h-screen overflow-hidden overflow-y-scroll">
        <Link
          className="flex bg-primary text-secondary hover:opacity-90 pr-3 py-2 rounded-lg shadow-md w-[100px] text-nowrap"
          href={"/"}
        >
          <ChevronLeft /> <span className="font-semibold">Go back</span>
        </Link>

        <div className="flex flex-col items-center p-8">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#51412e]">Confirmations:</h1>
          <div className="flex flex-wrap gap-4 py-4 lg:py-8">
            {confirmations.results.map((item) => {
              return (
                <div
                  className="flex flex-wrap justify-between gap-8 w-full lg:w-auto border-2 border-primary p-4 rounded-xl bg-white/40 backdrop-blur-sm shadow-xl"
                  key={item.id}
                >
                  <div>
                    <p className="font-semibold text-[#51412e] text-xl">
                      👤 {item.first_name} {item.last_name}
                    </p>
                    <p>✉️ {item.email}</p>
                    <p>📞 {item.phone}</p>
                    <p>🗺️ {item.address}</p>
                    <p>Company: {item.company}</p>
                  </div>

                  {item.companions.length > 0 && (
                    <div className="flex-1 flex flex-col">
                      <p className="text-xl font-semibold text-[#51412e]">Companioons:</p>
                      <ul>
                        {item.companions.map((item) => {
                          return (
                            <li key={item.id}>
                              ▪️ {item.first_name} {item.last_name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

export const runtime = "edge";
