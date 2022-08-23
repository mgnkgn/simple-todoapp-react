import React, { useEffect, useState } from "react";
import ListEl from "./components/ListEl";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [objects, setObjects] = useState([]);
  const [todoEdit, setTodoEdit] = useState(null);
  const [editText, setEditText] = useState("");
  const [followEdit, setFollowEdit] = useState(false);

  // Use Effect - Get from local
  useEffect(() => {
    getFromLocal();
  }, []);

  // Use Effect - Saving to local
  useEffect(() => {
    saveToLocal();
  }, [objects]);

  const saveToLocal = () => {
    if (objects.length > 0)
      localStorage.setItem("todo", JSON.stringify(objects));
  };

  const getFromLocal = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(
        localStorage.getItem("todo", JSON.stringify(objects))
      );
      setObjects(localTodo);
    }
  };
  return (
    <div className="App">
      <header className="App-header">TO DO LIST</header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoObjects={objects}
        setTodoObjects={setObjects}
        date={date}
        setDate={setDate}
      ></Form>
      <div>
        <ListContainer
          todo={todo}
          setTodo={setTodo}
          todoObjects={objects}
          setTodoObjects={setObjects}
          date={date}
          setDate={setDate}
          todoEdit={todoEdit}
          setTodoEdit={setTodoEdit}
          editText={editText}
          setEditText={setEditText}
          followEdit={followEdit}
          setFollowEdit={setFollowEdit}
        ></ListContainer>
      </div>
    </div>
  );
}

export default App;
