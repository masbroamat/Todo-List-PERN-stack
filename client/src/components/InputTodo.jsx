import React from 'react'
import { useState } from 'react'

const InputTodo = () => {

  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch("http://localhost:5000/todos",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="maincontent relative flex flex-col gap-10 text-white w-full h-auto mt-32 justify-start items-center">
      <div className="title flex flex-col justify-center items-center">
        <h1 className='font-inter text-3xl'>Todo List App</h1>
        <p className='font-inter text-md font-light'>PERN Stack</p>
      </div>
      <form action="" className='flex flex-row gap-6 w-4/6 justify-center' onSubmit={onSubmitForm}>
        <input 
          type="text" 
          placeholder='Enter a todo task'
          className='p-2 bg-transparent border-b-2 outline-none w-[50%] focus:border-b-emerald-300'
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          type='submit'
          className="text-white font-bold py-2 px-5 bg-emerald-700 hover:bg-emerald-900 rounded-[5px] border-emerald-300"
        >↵</button>
      </form>
    </div>
  )
}

export default InputTodo