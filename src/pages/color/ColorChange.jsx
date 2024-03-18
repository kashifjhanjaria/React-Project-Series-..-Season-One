import React, { useState } from 'react'
import { Random } from '../../helper/Random';

const ColorChange = () => {
    const [color , setColor] = useState('');
    const [rgb, setRgb] = useState('');
    const handleGenrateRandomColor = ()=>{
        const  arra= ['1', '2' , '3', '4', '5' , '6', '7' , '8' , '9' , 'A' , 'B' , 'C' , 'D' , 'E' , 'F' ];
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += arra[ Random(arra.length)]; 
        }
        setColor(color);
    }

    const handleRgbColor = ()=>{
       const r = Random(256)
       const g = Random(256)
       const b = Random(256)

       setRgb(`rgb(${r} , ${g} , ${b})`);
       
    }
    console.log(rgb);
  return (
    <div>
        <div className='flex mt-3 gap-2'>
            <button className='py-1 px-2 bg-gray-100 rounded-lg ' onClick={handleGenrateRandomColor}>Genrate Color</button>
            <button  className='py-1 px-2 bg-gray-100 rounded-lg ' onClick={handleRgbColor}>Genrate Color RGB</button>
            </div>
        {
            color ? <div className='w-[700px] h-[70%]  mt-5 flex justify-center items-center' style={{backgroundColor:`${color}`}}  >
            <h1 className='text-4xl font-semibold text-white'>{ color && color}</h1>
        </div>
       : <div className='w-[700px] h-[70%]  mt-5 flex justify-center items-center' style={{backgroundColor:`${rgb}`}}  >
        <h1 className='text-4xl font-semibold text-white'>{ rgb && rgb}</h1>
    </div>
        
        }
    </div>
  )
}

export default ColorChange