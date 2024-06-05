import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

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
    <div className="bg-slate-600 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white w-dvw max-w-lg mx-auto rounded overflow-hidden shadow-lg">
        <header className="text-center py-5 border-b">
          <h1 className="text-2xl font-bold">ALL TASKS</h1>
        </header>
        <main className="p-4">
          <div className="mb-4 flex flex-col">
            <input
              type="text"
              className="p-2 flex-grow mr-2 shadow-lg rounded-md border-solid border border-cyan-900"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
            />
            <div className=" max-h-dvh overflow-hidden">
              <ul className="my-4">
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-2 shadow-xl rounded-md p-1"
                  >
                    <span
                      className={
                        todo.completed ? "opacity-50 flex-grow" : "flex-grow"
                      }
                    >
                      {todo.text}
                    </span>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(index)}
                      className="ml-2"
                    />
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
              className="bg-blue-500 text-white p-3 h-10 w-10 rounded-full m-auto my-3"
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
