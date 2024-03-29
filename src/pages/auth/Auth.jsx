import React, { useContext, useEffect } from 'react'
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Auth = ({isauthenticated}) => {
 console.log(isauthenticated);
 

const loction = useLocation();
console.log(location);
 
  return (
    <div className='h-[700px] '>
       <div className='flex mt-5'>
       <ul className='flex gap-5'>
        <li> <NavLink to="register"  className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}>Register</NavLink>
        </li>
        <li><NavLink to="login" className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}>Login</NavLink></li>
       </ul>
       </div>
       <div className='mt-5'>
       {
        isauthenticated ? <Navigate to="login"/> : <Outlet/>
       }
       </div>
    </div>
  )
}

export default Auth