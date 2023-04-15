import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ title, users, onDelete, onToggle, isDone }) {
  return (
    <div className="list">
      <h2>{title}</h2>
      <div className="wrapper">
        {users
          .filter((user) => user.isDone === isDone)
          .map((user) => (
            <TodoItem
              key={user.id}
              user={user}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
      </div>
    </div>
  );
}
export default TodoList;
