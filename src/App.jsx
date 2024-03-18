import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import RouteLayout from './routelayout/RouteLayout'
import Home from './pages/Home'
import Accordian from './pages/accordian/Accordian'
import RegistrationFrom from './pages/form/RegistrationFrom'
import Theme from './pages/theme/Theme'
import ThemeContextState from './context/ThemeContextState'
import ColorChange from './pages/color/ColorChange'
import Popup from './pages/popup/Popup'



function App() {
 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RouteLayout/>}>

    <Route index element={<Home/>}/>
    <Route path='accordian' element={<Accordian/>}/>
    <Route path='form' element={<RegistrationFrom/>}/>
    <Route path='theme' element={<Theme/>}/>
    <Route path='color' element={<ColorChange/>}/>
    <Route path='popup' element={<Popup/>}/>
   
  

  </Route>
))


  return (
    <>
    <ThemeContextState>
    <RouterProvider router={router}/>
    </ThemeContextState>
     
    </>
  )
}

export default App
