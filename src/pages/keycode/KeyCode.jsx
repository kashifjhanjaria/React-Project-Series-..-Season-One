import React, { useEffect, useState } from 'react'

const KeyCode = () => {
    const [code, setCode] = useState('');
    const [key, setKey] = useState('')
    const [keyCode, setkeyCode] = useState('')
    const handleKeyCode = (e) => {
        console.log(e);
        console.log(e);
        setCode(e.code)
        setKey(e.key)
        setkeyCode(e.keyCode)
    }
    useEffect(() => {
        window.addEventListener('keypress', handleKeyCode);

        return () => {
            window.removeEventListener('keypress', handleKeyCode);
        };
    }, [])
    return (
       <>
       
       {key ?  <div className='flex flex-col items-center mt-5'>
            <div className='w-40 h-40 bg-white rounded-full text-5xl flex justify-center items-center'>{key}</div>
            <div className='flex gap-10 mt-3 '>
                <div className='bg-white text-2xl  py-1 px-2 rounded-lg'>{code}</div>
                <div className='bg-white text-2xl  py-1 px-2 rounded-lg'>{keyCode}</div></div>


        </div> : <div className='text-6xl font-semibold text-white'>Press </div> }
       </>
    )
}

export default KeyCode