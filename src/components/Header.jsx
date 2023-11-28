import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Header() {

    const[toggle,setToggle] = useState(0);

  return (
   
      <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1100px]  mx-auto flex justify-between items-center'>
            <div className='md:text-3xl font-bold text-[25px]'>
                WsCube Tech
            </div>

            {
                
                toggle?
                <IoMdClose onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block' /> 
                :
                <IoMenuSharp onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
            
            }
            
            <ul className='hidden md:flex text-white gap-10'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            {/* responsive menu */}

            <ul className={`duration-500 md:hidden text-white fixed w-full h-screen bg-black  top-[68px] 
            ${toggle ? 'left-[0]' : 'left-[-100%]'}
            `}>

                <li className='p-4' >Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                
            </ul>    
        </div>
      </div>
    
  )
}