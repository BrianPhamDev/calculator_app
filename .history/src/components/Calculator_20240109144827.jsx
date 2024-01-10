import { calculatorButtons } from "../globals/calculator-button-data";
import { useReducer } from "react";

function reducer(state, action) {}

const Calculator = () => {
  const specialTypes = {
    operator: "bg-violet-400 hover:bg-violet-300 text-white font-bold",
    enter: "bg-blue-400 hover:bg-blue-300 text-white font-bold",
  };
  const specialClasses = {
    ac: "col-span-2 w-40 bg-red-300 text-white font-bold hover:bg-red-400",
    c: "bg-orange-300 text-white font-bold hover:bg-orange-400",
  };

  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="border border-white">
      <div className="w-60 h-fit bg-black text-white flex flex-col items-end justify-around p-2 break-words break-all">
        <div className="previous text-gray-200">{previous || "N/A"}</div>
        <div className="current text-2xl">{current || "0"}</div>
      </div>

      <div className="grid grid-cols-3">
        {calculatorButtons.map((button) => {
          return (
            <div
              key={button.className}
              className={`bg-gray-200 flex items-center justify-center w-20 h-20 hover:bg-slate-300 text-lg  ${
                specialClasses[button.className] || ""
              }
              ${specialTypes[button.type] || ""}`}
            >
              {button.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
