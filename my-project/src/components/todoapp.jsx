import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import AddModal from "./modal";

  const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
      setShowModal(false)
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleOnClose =() => setShowModal(false)

  return (
    <>
      <div className="bg-slate-800 max-sm:py-0 min-h-screen flex items-center justify-center py-4">
        <div className="bg-white max-sm:max-h-lvh min-h-[90dvh] sm:max-h-dvh max-sm:relative w-dvw max-w-lg mx-auto rounded shadow-lg">
          <header className="text-center py-5 border-b sticky top-2">
            <h1 className="text-2xl font-bold">ALL TASKS</h1>
          </header>
          <main className="p-4">
            <div className="mb-4 flex flex-col">
              <div className="overflow-y-auto">
                <ul className="my-4">
                  {todos.map((todo, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 shadow-md rounded-md p-1 py-3"
                    >
                      <span
                        className={
                          todo.completed
                            ? "text-zinc-400 line-through flex-grow"
                            : "flex-grow"
                        }
                      >
                        {todo.text}
                      </span>
                      <label className="relative cursor-pointer">
                        <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-200 ease-in-out">
                          {todo.completed && (
                            <FaCheck className="absolute text-white" />
                          )}
                          <span
                            className={
                              todo.completed
                                ? "bg-light-green rounded-full w-5 h-5"
                                : "bg-transparent rounded-full w-3 h-3"
                            }
                          ></span>
                        </span>
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleTodo(index)}
                          className="hidden"
                        />
                      </label>
                      <button
                        className="bg-red-500 text-white p-2 ml-2 rounded-full"
                        onClick={() => deleteTodo(index)}
                      >
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="bg-blue-500 text-white p-4 h-15 w-15 rounded-full m-auto my-3 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed"
                onClick={() => setShowModal(true)}
              >
                <FaPlus className="text-4xl" />
              </button>
            </div>
          </main>
        </div>
        <AddModal onClose={handleOnClose} visible={showModal} addTodo={addTodo} setNewTodo={setNewTodo}/>  
      </div>
    </>
  );
};

export default TodoApp;
