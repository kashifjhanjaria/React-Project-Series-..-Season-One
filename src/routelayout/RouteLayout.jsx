import React, { useContext } from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeContext'

const RouteLayout = () => {
  const [theme] = useContext(ThemeContext);
  return (
   <div className={`${theme ? "bg-gray-900 text-white" : "bg-gray-300"}`}>
 <div className='flex justify-center'>
 <Navbar/>
 </div>
    <div className='flex bg-gray-700 justify-center w-full ' style={{height:"calc(100vh - 100px)"}}>
    <Outlet/>
    </div>
      <div
      className={`h-[50px] flex justify-center items-center  font-semibold ${theme ? "bg-gray-900 text-white" : "bg-gray-300"}`} 
>
        <h2 >Footer</h2></div>
   </div>
  )
}

export default RouteLayout