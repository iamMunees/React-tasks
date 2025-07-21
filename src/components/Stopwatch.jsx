import React, { useState, useRef } from "react";

// Stopwatch component
const Stopwatch = () => {
  // Time in seconds
  const [time, setTime] = useState(0);
  // State to track if stopwatch is running
  const [isRunning, setIsRunning] = useState(false);

  // useRef stores the interval ID (doesn't re-render on change)
  const intervalRef = useRef(null);

  // Start or pause the stopwatch
  const handleStartPause = () => {
    if (isRunning) {
      // If running, pause it
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      // If not running, start it
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increase time every second
      }, 1000);
      setIsRunning(true);
    }
  };

  // Reset stopwatch to 0 and stop
  const handleReset = () => {
    clearInterval(intervalRef.current); // Stop the interval
    setTime(0); // Reset time to 0
    setIsRunning(false); // Set running state to false
  };

  // Convert time in seconds to HH:MM:SS
  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-white text-4xl font-bold mb-8">Stopwatch</h1>

      {/* Display formatted time */}
      <div className="text-6xl font-mono text-white bg-gray-800 px-12 py-6 rounded-xl shadow-md mb-8">
        {formatTime(time)}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleStartPause}
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            isRunning ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
