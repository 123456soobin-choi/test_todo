import { useState } from "react";
import "./App.css";

function App() {
  const [con, setCon] = useState(""); //새로운 값을 담을 con 초기값 선언
  const [toDos, setToDos] = useState([]); //con들을 담을 배열 초기값 선언

  const onChangeHandler = (event) => {
    setCon(event.target.value); //input에 값 입력했을 때 value값 가져오기
  };

  const onCreateHandler = (event) => {
    if (con === "") {
      return; //아무것도 입력하지 않으면 함수 실행시키지 않음
    }
    setToDos([...toDos, con]); //create한 con 넣은 배열로 갈아끼우기
    // setToDos((currentArray) => [con, ...currentArray]);
    setCon(""); //con 초기화
  };
  console.log(toDos);

  return (
    <div className="layout">
      <header>
        <div className="add-form">
          <input
            className="content"
            onChange={onChangeHandler}
            type="text"
            value={con}
          ></input>
          <button className="add-button" onClick={onCreateHandler}>
            Add
          </button>
        </div>
        <h1>Todo List</h1>
      </header>
      <div className="list">
        {toDos.map((con) => (
          <div className="todo-container">{con}</div>
        ))}
      </div>
    </div>
  );
}
/*toDos배열에서 con을 하나씩 각각 불러와서 container에 담아주기 */

export default App;
