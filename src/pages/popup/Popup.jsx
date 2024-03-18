import React, { useState } from 'react'
import Model from './Model';

const Popup = () => {
    const [popup , setPopUp] = useState(false);
    const handlePopUp = ()=>{
        setPopUp(!popup);
    }
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-3 relative'>
        <button className='py-1 px-2 bg-white rounded-lg abolute' onClick={handlePopUp}>POP Up</button>

      {
        popup &&  <Model popup={popup} setPopUp={setPopUp}/>
      }
    </div>
  )
}

export default Popup