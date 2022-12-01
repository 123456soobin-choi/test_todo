import { useState } from "react";
import "./App.css";

function App() {
  const [con, setCon] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeHandler = (event) => {
    setCon(event.target.value);
  };

  const onCreateHandler = (event) => {
    if (con === "") {
      return;
    }
    setToDos((currentArray) => [con, ...currentArray]);
    setCon("");
  };
  console.log(toDos);

  return (
    <div className="layout">
      <header>
        <div className="add-form">
          <input
            className="con"
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

export default App;
