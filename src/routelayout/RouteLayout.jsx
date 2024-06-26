import React, { useContext } from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeContext'

const RouteLayout = () => {
  const [theme] = useContext(ThemeContext);
  return (
   <div className={`overflow-hidden ${theme ? "bg-gray-900 text-white " : "bg-gray-300 " }`}>
 <div className='flex justify-center'>
 <Navbar/>
 </div>
    <div className=' flex bg-gray-700 justify-center w-full ' style={{minHeight:"600px"}}>
    <Outlet/>
    </div>
      <div
      className={`fixed bottom-0 w-full h-[50px] flex justify-center items-center  font-semibold ${theme ? "bg-gray-900 text-white" : "bg-gray-300"}`} 
>
        <h2 >Footer</h2></div>
   </div>
  )
}

export default RouteLayout