import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=''>
            <div className='px-8 py-7 gap-3 flex flex-col'>
                <h1 className='font-bold text-2xl'>Simple tasks</h1>
                <Link to="/count">Counter</Link>
                <Link to="/darkmode">Darkmode</Link>
                <Link to="/form">Form</Link>
                <Link to='/search'>Search filter</Link>
                <Link to='/todo'>To-Do</Link>
                <Link to='/digital'>Digital clock</Link>
                <Link to='/cals'>Simple calculator</Link>
                <Link to='/watch'>Stop watch</Link>
            </div>
            <div className='px-8 py-7 gap-3 flex flex-col'>
                <h2 className='font-bold text-2xl'>Hooks</h2>
            </div>
        </div>
    )
}

export default Sidebar;