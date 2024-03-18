import React from 'react'
import {createPortal} from "react-dom"
const Model = ({popup, setPopUp}) => {
  return createPortal (
    <div  onClick={()=>setPopUp(false)} className='bg-white/50  cursor-pointer border absolute '  style={{top:"50%" , left:"50%" , transform:"translate(-50%, -50%)" , width:"100%" , height:"calc(100vh - 95px)"}}>
        <div onClick={(e)=>e.stopPropagation()} className='absolute ' style={{top:"50%" , left:"50%" , transform:"translate(-50%, -50%)"}}>
   
   <div className='flex flex-col justify-between items-center w-[400px] h-[50%] py-5 px-5 bg-white rounded-lg '>
   <div className="header font-semibold text-3xl  w-full flex justify-between">Header <span className='w-[40px] h-[40px] bg-gray-300 flex justify-center items-center rounded-full' onClick={()=>setPopUp(false)}>X</span></div>
   <div className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam doloribus repellat dignissimos fugit corporis consectetur sit quidem eligendi magni?</div>
   <div className="footer font-semibold text-3xl">
       Footer
   </div>
</div>

</div>
    </div>,
     document.querySelector('#portal')
  )
 
}

export default Model