import { PlusCircle, Trash } from "lucide-react";

export interface Person {
  firstName: string;
  lastName: string;
}

const GuestsInput = ({ inputList, setInputList }: { inputList: Person[]; setInputList: any }) => {
  const handleinputchange = ({ e, index }: { e: any; index: any }) => {
    const { name, value } = e.target;
    const list: any = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleremove = (index: any) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleaddclick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div>
      {inputList.length === 0 && (
        <button
          className="flex gap-1 items-center border rounded-lg px-2 py-1 my-2 pr-2 bg-green-600 hover:bg-green-500 transition-colors"
          onClick={handleaddclick}
        >
          <PlusCircle className="stroke-secondary" />
          <span className="text-sm text-secondary font-semibold">Añadir acompañante/s</span>
        </button>
      )}
      {inputList.length !== 0 && <p className="text-primary pl-2 text-xs">Acompañante/s</p>}

      {inputList.map((x, index) => {
        return (
          <div key={index} className="border border-primary rounded-xl p-2 mb-2 bg-white">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <label className="text-xs text-primary" htmlFor={`firstName${index}`}>
                  First Name
                </label>
                <input
                  required
                  className="border pl-2 py-1 rounded-md w-full h-8 text-xs  text-[#383529] border-primary"
                  type="text"
                  name={`firstName${index}`}
                  id={`firstName${index}`}
                  placeholder="First Name"
                  onChange={(e) => handleinputchange({ e, index })}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-primary" htmlFor={`lastName${index}`}>
                  Last Name
                </label>
                <input
                  required
                  className="border pl-2 py-1 rounded-md w-full h-8 text-xs  text-[#383529] border-primary"
                  type="text"
                  name={`lastName${index}`}
                  id={`lastName${index}`}
                  placeholder="Last Name"
                  onChange={(e) => handleinputchange({ e, index })}
                />
              </div>
              <button onClick={() => handleremove(index)}>
                <Trash className="stroke-red-800 hover:stroke-red-600" />
              </button>
            </div>
            {inputList.length - 1 === index && (
              <button
                className="flex gap-1 items-center border rounded-lg px-2 py-1 my-2 bg-green-600 hover:bg-green-500 transition-colors"
                onClick={handleaddclick}
              >
                <PlusCircle className="stroke-secondary" />
                <span className="text-sm text-secondary font-semibold">Añadir acompañante</span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GuestsInput;
