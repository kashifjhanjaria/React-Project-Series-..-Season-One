import React, { useState } from 'react'
import axios from 'axios'

const RandomUser = () => {
    const [randomUser  , setRandomUser] = useState([]);
    const  handleGetRandomUser = async ()=>{
        // console.log("helelle");
     

        try {
            
            const response = await axios.get('https://randomuser.me/api/');
            console.log(response.data.results[0].name.title
                ) ;
            setRandomUser(response.data.results);

        } catch (error) {
            console.log(error.message);
        }
    }
console.log(randomUser);
  
  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='font-semibold text-4xl text-white '>Random User</h1>
        <button onClick={handleGetRandomUser} className='py-1 px-2 bg-green-400 rounded-lg'>Random User</button>
    <div className='mt-5'>
        {randomUser.map((items)=>{
            return(
                <div key={items.id} className='flex flex-col items-center'>
                    <img className='rounded-full' src={items.picture.large} alt="" />
                   <h1 className='text-5xl text-white'>{items.name.title } {items.name.first} {items.name.last}</h1>
                    <p className='text-2xl text-white'>{items.email }</p>
                    <p className='text-2xl text-white'>{items.phone }</p>
                    </div>
            )
        })}
    </div>
    </div>
  )
}

export default RandomUser