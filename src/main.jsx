import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./assignment/pages/HomePage.jsx";
import TodoList from "./todolist/Todolist.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);
