import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthContextState = ({children}) => {
    const [auth , setAuth] = useState()
  return (
   <AuthContext.Provider value={[auth , setAuth]}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextState