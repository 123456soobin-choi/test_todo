import { useState } from "react";
import "./App.css";

function App() {
  const [con, setCon] = useState(""); //���ο� ���� ���� con �ʱⰪ ����
  const [toDos, setToDos] = useState([]); //con���� ���� �迭 �ʱⰪ ����

  const onChangeHandler = (event) => {
    setCon(event.target.value); //input�� �� �Է����� �� value�� ��������
  };

  const onCreateHandler = (event) => {
    if (con === "") {
      return; //�ƹ��͵� �Է����� ������ �Լ� �����Ű�� ����
    }
    setToDos([...toDos, con]); //create�� con ���� �迭�� ���Ƴ����
    // setToDos((currentArray) => [con, ...currentArray]);
    setCon(""); //con �ʱ�ȭ
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
/*toDos�迭���� con�� �ϳ��� ���� �ҷ��ͼ� container�� ����ֱ� */

export default App;
