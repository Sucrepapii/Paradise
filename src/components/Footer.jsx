import React from 'react'
import { ImAirplane } from "react-icons/im";

const Footer = () => {
  return (
    <div className='max-w-[114opx] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <ImAirplane size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>PARADISE</h1>
        </div>
        <div>
            <h3 className='flex items-center m-auto justify-center'>Create Memories, One Trip at a Time!</h3>
        </div>
    </div>
  )
}

export default Footer