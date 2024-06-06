import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import './todapp.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
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

  return (
    <div className="bg-slate-800 max-sm:py-0 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white max-sm:max-h-lvh max-sm:h-dvh max-sm:relative w-dvw max-w-lg mx-auto rounded shadow-lg">
        <header className="text-center py-5 border-b">
          <h1 className="text-2xl font-bold">ALL TASKS</h1>
        </header>
        <main className="p-4">
          <div className="mb-4 flex flex-col">
            <input
              type="text"
              className="p-2 flex-grow mr-2 shadow-lg rounded-md border-solid border border-cyan-900 sticky top-2 bg-white"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
            />
            <div className="overflow-y-auto">
              <ul className="my-4">
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-2 shadow-md rounded-md p-1"
                  >
                    <span
                      className={
                        todo.completed ? "text-zinc-400  flex-grow" : "flex-grow"
                      }
                    >
                      {todo.text}
                    </span>
                    <label className="relative cursor-pointer">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(index)}
                        className="hidden"
                      />
                      <span className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-200 ease-in-out">
                        <span
                          className={
                            todo.completed
                              ? "bg-blue-500 rounded-full w-3 h-3"
                              : "bg-transparent rounded-full w-3 h-3"
                          }
                        ></span>
                      </span>
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
              className="bg-blue-500 text-white p-3 h-10 w-10 rounded-full m-auto my-3 max-sm:bottom-0 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:fixed"
              onClick={addTodo}
            >
              <FaPlus />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TodoApp;
