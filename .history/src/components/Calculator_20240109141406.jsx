import { calculatorButtons } from "../globals/calculator-button-data";

const Calculator = () => {
  return (
    <div className="bg-slate-400">
      <h1>Calculator</h1>
      {calculatorButtons.map((button) => {
        return (
          <div
            key={button.className}
            className={`calculator-button ${button.className}`}
          >
            {button.text}
          </div>
        );
      })}
    </div>
  );
};

export default Calculator;
