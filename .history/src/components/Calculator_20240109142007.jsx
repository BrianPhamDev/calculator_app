import { calculatorButtons } from "../globals/calculator-button-data";

const Calculator = () => {
  return (
    <div className="">
      <h1>Display</h1>
      <div className="grid grid-cols-5">
        {calculatorButtons.map((button) => {
          return (
            <div
              key={button.className}
              className={`bg-gray-200 flex items-center justify-center w-20 h-20 hover:bg-slate-300 text-lg`}
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
