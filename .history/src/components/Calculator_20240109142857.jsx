import { calculatorButtons } from "../globals/calculator-button-data";

const Calculator = () => {
  const specialTypes = {
    number: "hover:bg-gray-300",
    clear: "hover:bg-red-300",
  };
  const specialClasses = {
    ac: "col-span-2 w-40 bg-red-400 text-white",
  };
  return (
    <div className="">
      <h1>Display</h1>
      <div className="grid grid-cols-3">
        {calculatorButtons.map((button) => {
          return (
            <div
              key={button.className}
              className={`bg-gray-200 flex items-center justify-center w-20 h-20 hover:bg-slate-300 text-lg ${
                specialClasses[button.className] || ""
              }
              ${specialTypes[button.className] || ""}`}
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
