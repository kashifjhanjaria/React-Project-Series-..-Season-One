import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeContextState = ({children}) => {
    const [ theme, setTheme] = useState(false);
  return (
   <ThemeContext.Provider value={[theme , setTheme]}>
    {children}
   </ThemeContext.Provider>
  )
}

export default ThemeContextState