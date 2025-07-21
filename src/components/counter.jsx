import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [before, setAfter] = useState(0);
  
    return (
        <div className='flex flex-col gap-9 items-center mt-10'>
            <h1>The value</h1>
            <h2>{before}</h2>
            <div className='flex flex-col gap-3'>
                <button onClick={() => setAfter((curr) => curr + 1)} className='bg-blue-500 rounded-lg px-3 py-2'>Increse the value</button>
                <button onClick={() => setAfter((curr) => curr - 1)} className='bg-blue-500 rounded-lg px-3 py-2'>Degresse the value</button>
            </div>
        </div>
    )
}

export default Counter;