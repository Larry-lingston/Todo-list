import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const modal = ({ visible, onClose, addTodo, setNewTodo}) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  

  if (!visible) return null;
  return (
    <div
      className="fixed bg-black bg-opacity-35 inset-0 backdrop-blur-sm flex justify-center text-center items-center"
      onClick={handleOnClose}
      id="container"
    >
      <div className="bg-white text-black w-2/6 h-2/6 p-2 rounded-xl max-sm:w-80 max-sm:h-72">
        <div className="flex justify-end w-full">
          <button onClick={onClose}>
            <IoCloseCircleOutline className="text-3xl text-slate-800 cursor-pointer mx-2" />
          </button>
        </div>
        <header className=" text-3xl font-bold p-4 pb-5">Add a task</header>
        <div className="flex flex-col">
          <input
            type="text"
            className="shadow-lg rounded-lg border-solid border border-cyan-900 p-2 w-5/6 mx-auto outline-none"
            onChange={(e)=>setNewTodo(e.target.value)}
            placeholder="what is the task"
          />
          <button className="border bg-blue-800 p-2 w-2/6 rounded-3xl mx-auto my-3 font-bold text-white flex justify-center max-sm:w-56 max-sm:py-3 max-sm:my-5" onClick={(e)=>{
            e.preventDefault()
            addTodo()
          }}>
            Add Task <FaCheck className="text-white mx-1 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default modal;
