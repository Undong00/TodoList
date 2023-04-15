import React from "react";

function TodoItem({ user, onDelete, onToggle }) {
  return (
    <div className="listbox">
      <h2>{user.title}</h2>
      <h3>{user.body}</h3>
      <div className="btnlist">
        <button className="delbtn btn " onClick={() => onDelete(user.id)}>
          삭제하기
        </button>
        <button className="donebtn btn" onClick={() => onToggle(user.id)}>
          {user.isDone ? "취소하기" : "완료하기"}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
