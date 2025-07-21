import React from 'react'
import { useState } from 'react'

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handelevent= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <form action="" className='flex flex-col gap-4 bg-slate-500 p-4 rounded-lg'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={formData.name} onChange={handelevent} className='border-2 border-gray-700 rounded-lg'/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handelevent} className='border-2 border-gray-700 rounded-lg'/>
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={formData.password} onChange={handelevent} className='border-2 border-gray-700 rounded-lg'/>
            <button className='bg-amber-50 text-black border-2 rounded-lg' type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default SimpleForm;