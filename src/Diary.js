import { useState } from "react";

const Diary = () => {
  const [users, setUsers] = useState([
    // 유저
    { id: 1, author: "공부1", content: "파이팅" },
  ]);

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const addUserHandler = () => {
    // 추가하기
    const newUser = {
      id: users.length + 1,
      author: author,
      content: content,
    };

    setUsers([...users, newUser]);
    setAuthor("");
    setContent("");
  };

  // const submit = () => {
  //   alert("저장 성공!");
  // };

  return (
    <div className="DiartEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          type="text"
          value={author}
          onChange={authorChange}
          name="author"
          placeholder="작성자"
        />
      </div>
      <div>
        <textarea
          name="content"
          value={content}
          onChange={contentChange}
          placeholder="일기"
          type="text"
        ></textarea>
      </div>
      <div>
        <button onClick={addUserHandler}>일기 저장하기</button>
      </div>
      {/* 옵션  */}
    </div>
  );
};

export default Diary;
