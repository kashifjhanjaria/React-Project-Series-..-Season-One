import React, { useState } from 'react'
import { data } from './data'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([]);
    const handleSingleSelection = (id) => {
 
        setSelected(id)
    }
    const handleMultiSelection = (id) => {

        const copyMultiple = [...multiple];
        const findIndex = copyMultiple.indexOf(id);

        if (findIndex === -1) copyMultiple.push(id)
        else copyMultiple.splice(findIndex, 1);
        setMultiple(copyMultiple);
      
       
    }
    return (

        <div className='flex flex-col justify-center items-center  w-[90%]'>
            <button className='bg-orange-500 py-1 px-2 rounded-lg font-semibold text-white'
             onClick={() => setEnableMultiSelection(!enableMultiSelection)}> {enableMultiSelection ? "Disable Multiple Selection" : "Enable Multiple Selection"}</button>
            <div className='w-[50%]   mt-5 p-4' >
                {data && data.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="quesion flex justify-between w-full text-white p-1 px-3 bg-gray-400 cursor-pointer" 
                            onClick={enableMultiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)}>
                                <h4>{item.quesion}</h4> 
                                <span>{selected === item.id ? "-" : "+"}</span>
                            </div>
                            {
                                enableMultiSelection ? multiple.indexOf(item.id) !== -1 &&
                                    <div className="anwser  p-4 px-5 text-white bg-gray-900">{item.answer}</div>
                                    : selected === item.id && <div className="anwser  p-4 px-5 text-white bg-gray-900">{item.answer}</div>
                            }
                            {/* {selected === item.id ? <div className="anwser  p-4 px-5 text-white bg-gray-900">{item.answer}
                            </div> : null} */}
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Accordian