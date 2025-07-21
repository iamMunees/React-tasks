import React from 'react'
import { useState } from 'react'

const Darkmode = () => {
    const [theme, setTheme] = useState('light')

    const theameStyle = {
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
    }
    return (
        <div style={theameStyle} className='h-screen flex flex-col items-center'>
            <div  className=' mt-20'>
                <h1 className='logo py-9'>Hello World</h1> 
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='border-2 w-20 rounded-lg'>dark </button>
            </div>
        </div>
    )
}

export default Darkmode;