import React, { useState } from "react";

// Calculator Component
const Calculator = () => {
  // State to hold the input and result
  const [input, setInput] = useState("");

  // Function to handle button clicks (numbers/operators)
  const handleClick = (value) => {
    setInput((prev) => prev + value); // Append value to current input
  };

  // Clear the entire input
  const handleClear = () => {
    setInput("");
  };

  // Calculate the result using eval
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ Using eval for simplicity
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-80">
        <div className="text-white text-3xl mb-4 text-center">Calculator</div>

        {/* Display input/result */}
        <input
          type="text"
          value={input}
          readOnly
          className="w-full text-right text-2xl bg-white text-black p-2 rounded mb-4"
        />

        {/* Button grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Number and operator buttons */}
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"].map((btn) =>
            btn === "=" ? (
              <button
                key={btn}
                onClick={handleCalculate}
                className="bg-green-500 text-white p-3 rounded hover:bg-green-600"
              >
                {btn}
              </button>
            ) : (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="bg-gray-600 text-white p-3 rounded hover:bg-gray-700"
              >
                {btn}
              </button>
            )
          )}

          {/* Clear button */}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 text-white p-3 mt-2 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
