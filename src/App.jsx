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
import RandomUser from './pages/randomuser/RandomUser'

import KeyCode from './pages/keycode/KeyCode'
import PinterestSearch from './search/PinterestSearch'
import { Sidebar } from './sidebar/Sidebar'



function App() {
 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RouteLayout/>}>

    <Route index element={<Home/>}/>
    <Route path='accordian' element={<Accordian/>}/>
    <Route path='form' element={<RegistrationFrom/>}/>
    <Route path='theme' element={<Theme/>}/>
    <Route path='color' element={<ColorChange/>}/>
    <Route path='popup' element={<Popup/>}/>
    <Route path='randomuser' element={<RandomUser/>}/>
    <Route path='keycode' element={<KeyCode/>}/>
    <Route path='pinterestsearch' element={<PinterestSearch/>}/>
    <Route path='sidebar' element={<Sidebar/>}/>
   
   
  

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
