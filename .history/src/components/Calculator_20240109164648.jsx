import { calculatorButtons } from "../globals/calculator-button-data";
import { useReducer } from "react";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  CLEAR_CURRENT: "clear-current",
  DELETE_DIGIT: "delete-digit",
  CHOOSE_OPERATION: "choose-operation",
  EVALUATE: "evaluate",
};

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "\u00f7":
      computation = prev / current;
      break;
    case "\u00d7":
      computation = prev * current;
      break;
  }
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.value === 0 && state.current === "0") return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CLEAR_CURRENT:
      return {
        ...state,
        currentOperand: "",
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null)
        return state;

      if (state.previousOperand == null)
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: null,
          operation: payload.operation,
        };

      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: null,
        operation: payload.operation,
      };
  }
}

const Calculator = () => {
  const specialTypes = {
    operator: "bg-violet-400 hover:bg-violet-300 text-white font-bold",
    enter: "bg-blue-400 hover:bg-blue-300 text-white font-bold",
  };
  const specialClasses = {
    ac: "col-span-2 w-40 bg-red-300 text-white font-bold hover:bg-red-400",
    c: "bg-orange-300 text-white font-bold hover:bg-orange-400",
  };

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  const handleAddingDigit = (button) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: button.value } });
  };

  const handleClear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const handleClearCurrent = () => {
    dispatch({ type: ACTIONS.CLEAR_CURRENT });
  };

  const handleChooseOperation = (button) => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation: button.text },
    });
  };

  const typeFunctions = {
    number: handleAddingDigit,
    clear: handleClear,
    clearCurrent: handleClearCurrent,
    operator: handleChooseOperation,
  };

  return (
    <div className="border-[20px] border-cyan-200 shadow-lg">
      <div className="w-60 h-fit bg-black text-white flex flex-col items-end justify-around px-4 py-4 break-words break-all">
        <div className="previous text-gray-200">
          {previousOperand || "N/A"} {operation}
        </div>
        <div className="current text-2xl">{currentOperand || "0"}</div>
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
              onClick={() => {
                const typeFunction = typeFunctions[button.type];
                if (typeFunction) {
                  typeFunction(button);
                }
              }}
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
