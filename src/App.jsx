import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [users, setUser] = useState([
    { id: 1, title: "이동언", body: "나는 이동언이다.", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titlechange = (e) => {
    setTitle(e.target.value);
  };

  const bodychange = (e) => {
    setBody(e.target.value);
  };

  const addbtn = () => {
    // 추가 버튼
    const newUsers = {
      id: users.length + 1, // 추가를 하기위해 길이 +1
      title: title,
      body: body,
      isDone: false,
    };
    setUser([...users, newUsers]);
    setTitle("");
    setBody("");
  };

  const deletebtn = (id) => {
    // 삭제 버튼 id를 받아 id가 같지 않다며 제외한 배열 생성
    const delUser = users.filter((user) => user.id !== id);
    setUser(delUser);
  };

  const completeDone = (id) => {
    // 완료 버튼 id를 받아서 해당 id의 user의 isDone을 true로 변경
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isDone: !user.isDone } : user
    );
    setUser(updatedUsers);
  };

  const cancelDone = (id) => {
    // 취소 버튼 id를 받아서 해당 id의 user의 isDone을 falsde로 변경
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isDone: false } : user
    );
    setUser(updatedUsers);
  };

  return (
    <div className="Layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="input">
        제목
        <input type="text" value={title} onChange={titlechange} />
        내용
        <input type="text" value={body} onChange={bodychange} />
        <button onClick={addbtn}>추가하기</button>
      </div>
      <TodoList
        title="Working..🔥"
        users={users}
        onDelete={deletebtn}
        onToggle={completeDone}
        isDone={false}
      />
      <TodoList
        title="Done..! 🎉"
        users={users}
        onDelete={deletebtn}
        onToggle={cancelDone}
        isDone={true}
      />
    </div>
  );
}

export default App;
