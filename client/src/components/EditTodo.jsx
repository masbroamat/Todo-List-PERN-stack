import React from "react";
import "../App.css";
import { useState } from "react";

const Modal = ({ isOpen, onClose, description, setDescription, todo }) => {
  if (!isOpen) return null;

  //edit description function

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify(body),

      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-5 rounded-lg shadow-lg relative">
        <h2 className="text-2xl mb-4 text-black font-semibold font-inter">Edit Todo</h2>
        <input 
          type="text" 
          className="p-2 bg-transparent border-b-2 outline-none w-full border-b-gray-300 focus:border-b-emerald-300 text-black" 
          placeholder="Enter a new todo task"
          value={description}  
          onChange={e => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={e => updateDescription(e)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EditTodo = ({todo}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDescription(todo.description);
    setIsModalOpen(false);
  };
  

  return (
    <>
      <button
        onClick={openModal}
        className="bg-yellow-600 text-white px-4 mt-4 py-2 rounded-md"
      >
        Edit
      </button>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} description={description} setDescription={setDescription} todo={todo}/>
    </>
  );
};

export default EditTodo;
