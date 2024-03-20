import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[90%] '>
      <ul className='flex gap-4 py-3'>
        <li ><NavLink className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg  text-white font-semibold" : null)} to="/">Home</NavLink></li>
        <li><NavLink className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)} to="/accordian">Accordian</NavLink></li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/form">Form</NavLink>
        </li>

        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/theme">Theme</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/color">Color Change</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/popup">PopUp</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/randomuser">Random User</NavLink>
        </li>
       
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/keycode">Keycode</NavLink>
        </li>
        

      </ul></div>
  )
}

export default Navbar