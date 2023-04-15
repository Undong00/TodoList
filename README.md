# 💻 프로젝트 Description
### 프로젝트 명 : TodoList
> React 훅 useState와 props, jsx를 이용해서 간단히 만들어보는 TodoList입니다.

---

## ✅ 배포

 https://todo-list-lovat-eight.vercel.app/

----


## 📝 기능 

_**TodoItem, TodoList, App으로 컴포넌트를 분리하여 구성하였다.**_

**`TodoItem`** 컴포넌트는 하나의 Todo 아이템을 나타내며, **`user`** props를 받아 해당 아이템을 렌더링합니다. **`onDelete`** props는 해당 아이템 삭제 함수, **`onToggle`** props는 해당 아이템 완료/취소 함수를 받아 해당 기능을 수행합니다.

**`TodoList`** 컴포넌트는 **`title`**, **`users`**, **`onDelete`**, **`onToggle`**, **`isDone`** props를 받아 Todo 리스트를 렌더링합니다. **`users`** 배열에서 **`isDone`** 값에 따라 필터링하여 해당 리스트를 렌더링합니다.

**`App`** 컴포넌트는 전체 Todo 리스트 앱을 나타냅니다. **`users`** state는 Todo 아이템들을 저장하는 배열이며, **`title`**, **`body`** state는 새로운 Todo 아이템 추가 시 입력받은 제목과 내용을 저장합니다. **`addbtn`**, **`deletebtn`**, **`toggleDone`**, **`cancelDone`** 함수는 각각 Todo 아이템을 추가, 삭제, 완료/취소하는 기능을 수행합니다. 또한, **`TodoList`** 컴포넌트를 두 개 렌더링하여 **`isDone`** 값에 따라 완료/미완료 리스트를 구분합니다.

**컴포넌트 분리 전 원본 코드**

```jsx
import React, { useState } from "react";

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
      id: users.length + 1,
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

  const completebtn = (id) => {
    // 완료 버튼 id를 받아서 해당 id의 user의 isDone을 true로 변경
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isDone: !user.isDone } : user
    );
    setUser(updatedUsers);
  };

  const cancelbtn = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isDone: false } : user
    );
    setUser(updatedUsers);
  };

  return (
    <div className="최상단">
      <div>마이투두리스트</div>
      <div>리액트</div>
      <div>
        제목
        <input type="text" value={title} onChange={titlechange} />
        내용
        <input type="text" value={body} onChange={bodychange} />
      </div>
      <button onClick={addbtn}>추가하기</button>
      <div>
        <h2>Working</h2>
        {users
          .filter((user) => user.isDone === false)
          .map((user) => {
            return (
              <div>
                {user.title}-{user.body}
                <button onClick={() => deletebtn(user.id)}>삭제하기</button>
                <button onClick={() => completebtn(user.id)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>Done</h2>
        {users
          .filter((user) => user.isDone === true)
          .map((user) => {
            return (
              <div>
                {user.title}-{user.body}
                <button onClick={() => deletebtn(user.id)}>삭제하기</button>
                <button onClick={() => cancelbtn(user.id)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;```

---

## ✍️ 업데이트 내역

------


## 🔡 개발 환경 및 설치 방법


**Mac**

```sh
$ npm install -g yarn
yarn create-react-app my-app
cd my-app
yarn start
```

**Window**

```sh
$ npm install -g yarn
yarn create-react-app my-app
cd my-app
yarn start
```
----
