import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[90%] '>
      <ul className='flex gap-4 py-3'>
        <li ><NavLink className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg  text-white font-semibold" : null)} to="/">Home</NavLink></li>
        <li>
          <NavLink
           className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/accordian">Accordian (1)</NavLink></li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/form">Form (2)</NavLink>
        </li>

        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/theme">Theme (3)</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/color">Color Change (4)</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/popup">PopUp (5)</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/randomuser">Random User (6)</NavLink>
        </li>
       
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/keycode">Keycode (7)</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/pinterestsearch">Search (8)</NavLink>
        </li>
        <li>
          <NavLink
            className={active => (active.isActive ? "bg-pink-500 py-1 px-4 rounded-lg text-white font-semibold" : null)}
            to="/sidebar">Sidebar (9)</NavLink>
        </li>
        

      </ul></div>
  )
}

export default Navbar