import React, { useState } from 'react'

const TodoList = () => {
    const time = new Date();
    const hour = time.getHours();
    const mint = time.getMinutes();
    const todolist = [
       
    ]
    const [todos , setTodos] = useState(todolist)
    const [todo , setTodo] = useState('');

   
    // console.log(todolist);
    
    const handleTodo = ()=>{
        // setTodos(todo)
        
       if(todo == ""){
        console.log("empty");
      
       }else{
        setTodos([...todos , { id:Math.random() ,   todo:todo , time: `${hour} : ${mint} ${hour < 12 ? "AM" : "PM"}`}]);
        console.log(todo);
        setTodo('')
        console.log("not Value");
       }
    }
  return (
   
    <>
  
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
                <input 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                <button
                onClick={handleTodo}
                className="flex-no-shrink p-2 bg-gray-200 rounded text-teal border-teal hover:text-white hover:bg-black">Add</button>
            </div>
        </div>
        <div>

            {
                todos && todos.map((item)=>{
           return(
            <div className="flex mb-4 bg-gray-300 items-center" key={item.id}>
            <p className="w-full text-grey-darkest px-2">{item.todo}   </p><span className='flex  ' style={{width:"150px"}}>{item.time}</span>
            <button className="flex-no-shrink p-2 ml-4 bg-gray-400  rounded hover:text-white text-green border-green hover:bg-green-500">Done</button>
            <button className="flex-no-shrink p-2 ml-2 bg-gray-400  rounded text-red border-red hover:text-white hover:bg-red-500">Remove</button>
        </div>
           )
                })
            }
            


            
          	
        </div>
    </div>
</div>
    </>
  )
}

export default TodoList