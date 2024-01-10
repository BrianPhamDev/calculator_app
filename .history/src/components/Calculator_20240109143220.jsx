import { calculatorButtons } from "../globals/calculator-button-data";

const Calculator = () => {
  const specialTypes = {
    operator: "bg-purple-400 hover:bg-purple-300 text-white font-bold",
    enter: "bg-blue-400 text-white font-bold",
  };
  const specialClasses = {
    ac: "col-span-2 w-40 bg-red-300 text-white font-bold",
    c: "bg-orange-300 text-white font-bold",
  };
  return (
    <div className="">
      <h1>Display</h1>
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