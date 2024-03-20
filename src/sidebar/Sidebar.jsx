import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [sidebar , setSidbar] = useState(false)

    const handleSidebar = ()=>{
        console.log("ok");
        setSidbar(!sidebar)
    }
  return (
    <div className='w-full  flex justify-end'>
        <div className=''>
        <div className="btn py-1 px-2 bg-black text-white rounded-lg w-fit cursor-pointer flex justify-end" onClick={handleSidebar}>{sidebar ?"Close" :"Open"}</div>
        <div className=' w-[250px]  bg-white'
         style={{transform: sidebar ? "translateX(0px)"  : "translateX(250px)" , transition:"transform .5s" , height:"calc(100vh - 135px)"}}
         
         >
           <ul className='flex flex-col gap-2 px-2 py-2'>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/accordian">Accordian</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/form">Form</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/theme">Theme</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/color">Change Color</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/popup">PopUp</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/randomuser">Random User</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/keycode">Key Code</Link></li>
            <li className='font-semibold py-2 bg-gray-200 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-200 cursor-pointer'><Link to="/pinterestsearch">Search</Link></li>
           </ul>
        </div>
    </div>
    </div>
  )
}
