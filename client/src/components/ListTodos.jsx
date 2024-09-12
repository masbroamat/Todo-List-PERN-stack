import React from 'react'
import { useState, useEffect } from 'react'
import EditTodo from './EditTodo';

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id))

    } catch (err) {
      console.error(err.message);
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);
  
  return (
    <div className="listtodos">
      <table className="table-auto w-3/6 mx-auto text-white mt-20 text-center">
        <thead className='border-b-[1px] border-b-gray-600 '>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td className='text-center pt-4'>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td><button className='bg-red-600 text-white px-4 py-2 rounded-md mt-4' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListTodos