import React from 'react'
import { useState, useEffect } from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    // Update time every 1 second using useEffect
    useEffect(() => {
        const timer = setInterval(() => {
            setTime (new Date()); // ✅ Correct state update
        }, 1000);
        return ()=> clearInterval(timer); // Cleanup on unmount
    }, []);
    
    // Format the time (HH:MM:SS)
    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="text-white text-6xl font-mono bg-gray-800 p-10 rounded-2xl shadow-lg">
                {formattedTime}
            </div>
        </div>
    )
};

export default DigitalClock;