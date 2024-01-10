import { calculatorButtons } from "../globals/calculator-button-data";

const Calculator = () => {
  const specialClasses = {
    ac: "grid-rows-2",
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
              }`}
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
