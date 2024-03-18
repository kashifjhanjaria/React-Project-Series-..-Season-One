import React, { useState } from 'react'

const RegistrationFrom = () => {
  const [checkboxState, setCheckedState] = useState(false)
  const [email , setEmail] = useState('');
  const [phone, setPhone] = useState('')
  console.log(email);
  const handleChcekState = (e)=>{
// console.log(e.target.checked);
setCheckedState(!checkboxState);
    if(checkboxState === false)setEmail('')
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
   console.log(email , phone);

  
    

  }
  return (
    <div className='flex flex-col justify-center items-center  w-[90%]'>
      <div className='w-[50%]   mt-5 p-4 flex flex-col items-center gap-3 justify-center' >

        <h1 className='text-white font-semibold text-4xl'>Form</h1>
        <div className='flex flex-col'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 ' >
          
          <div className='flex flex-col gap-1 '>
          <label htmlFor="name" className='text-white font-semibold text-3xl'>
            {checkboxState ? "Phone" :"Email"}
          </label>
          <input type="checkbox" name="" id="" onClick={(e)=>handleChcekState(e)} />
          <div className='border w-[300px] h-[40px]'>
          {
            checkboxState ? 
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full h-full text-[20px] px-3' placeholder='Enter Your Phone' /> 
            : <input type="text" value={phone}  onChange={(e)=>setPhone(e.target.value)}  className='w-full h-full text-[20px] px-3' placeholder='Enter Your Email'  />
          }
          </div>
         </div>
           
           <button type='submit' className='py-1 px-2 bg-green-300 text-black font-semibold'>Save</button>
          </form>
        </div>
        </div>
</div>
  )
}

export default RegistrationFrom