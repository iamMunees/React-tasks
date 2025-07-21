import React, { useState } from "react";

// Simple Todo App Component
const ToDo = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  // State to hold the current input text
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Add todo to the list
  const handleAddTodo = () => {
    // Avoid adding empty todo
    if (input.trim() === "") return;

    // Create a new todo item
    const newTodo = {
      id: Date.now(), // unique ID
      text: input,
      completed: false,
    };

    // Update todos array with the new todo
    setTodos([...todos, newTodo]);
    setInput(""); // Clear input
  };

  // Toggle todo completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      <h1 className="text-4xl text-white font-bold mb-6">Simple Todo App</h1>

      {/* Input and Add Button */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a task..."
          className="px-4 py-2 rounded-lg w-64 focus:outline-none text-white"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white px-4 py-2 rounded shadow"
          >
            <span
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : "text-black"
              }`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
