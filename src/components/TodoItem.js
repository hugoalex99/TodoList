import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => toggleTodo(todo.id)} // clique no item alterna concluída
    >
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // impede que o clique no botão afete o <li>
          deleteTodo(todo.id); // exclui apenas
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
