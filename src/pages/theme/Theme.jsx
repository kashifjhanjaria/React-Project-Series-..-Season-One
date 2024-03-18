import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Theme = () => {
    const [theme  , setTheme] = useContext(ThemeContext);
    console.log(theme, 'theme');
    const handleToggleTheme = ()=>{
        setTheme(!theme)
    }
  return (
    <div className='flex flex-col gap-8 w-full h-full items-center justify-center'>
    
    <div className='text-4xl text-white'>Theme 

    
    </div>
    <button onClick={handleToggleTheme} className='py-1 px-2 bg-pink-300 rounded-lg'>Change Theme {theme ? "dark" : "light"}</button>
    </div>
  )
}

export default Theme