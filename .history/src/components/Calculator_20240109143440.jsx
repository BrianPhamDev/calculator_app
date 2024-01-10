import { calculatorButtons } from "../globals/calculator-button-data";
import { useState } from "react";

const Calculator = () => {
  const specialTypes = {
    operator: "bg-purple-400 hover:bg-purple-300 text-white font-bold",
    enter: "bg-blue-400 hover:bg-blue-300 text-white font-bold",
  };
  const specialClasses = {
    ac: "col-span-2 w-40 bg-red-300 text-white font-bold hover:bg-red-400",
    c: "bg-orange-300 text-white font-bold hover:bg-orange-400",
  };

  const [display, setDisplay] = useState();

  return (
    <div className="">
      <div className="w-60 h-20">
        <h1>{display}</h1>
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
