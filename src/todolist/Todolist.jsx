// TodoList.jsx
// Usage: place TodoList.jsx and TodoList.css in the same folder and import TodoList into your app

import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]); // store todos
  const [text, setText] = useState(""); // controlled input

  function handleAdd(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    // useState to add to todo array (immutably)
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="todo-root">
      <h2 className="todo-title">Simple Todo List</h2>

      <form className="todo-form" onSubmit={handleAdd}>
        <input
          className="todo-input"
          placeholder="Add a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.length === 0 && (
          <li className="todo-empty">No todos yet — add one above!</li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
            </label>
            <div className="todo-actions">
              <button
                className="btn btn-small"
                onClick={() => handleToggle(todo.id)}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>
              <button
                className="btn btn-danger btn-small"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
