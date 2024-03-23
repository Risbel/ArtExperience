import { getConfirmations } from "@/app/actions/confirmActions";
import { IConfirmations } from "@/app/actions/confirmTypes";

const ConfirmationsList = async () => {
  const confirmations: IConfirmations = await getConfirmations();

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl lg:text-3xl font-semibold text-[#51412e]">Confirmations:</h1>
      <div className="flex flex-wrap gap-4 py-4 lg:py-8">
        {confirmations.results.map((item) => {
          return (
            <div
              className="w-full lg:w-auto border-2 border-primary p-4 rounded-xl bg-white/40 backdrop-blur-sm shadow-xl"
              key={item.id}
            >
              <p className="font-semibold text-[#51412e] text-xl">👤 {item.name}</p>
              <p>✉️ {item.email}</p>
              <p>📞 {item.phone}</p>
              <p>🗺️ {item.address}</p>
              <p>Company: {item.company}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConfirmationsList;
