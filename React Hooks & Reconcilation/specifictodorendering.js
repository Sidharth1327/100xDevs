/* Problem Statement : 
    Write a component that takes a todo id as an input and fetches the data for that todo from the given endpoint and renders it  */

import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [selectedId, setselectedId] = useState(1);
  return (
    <div>
      {/* suppose we need to get the todo when we click the button, if 1 is clicked
      1st todo should come, 2nd means 2nd todo should be shown */}
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(4);
        }}
      >
        1
      </button>
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState({});
  const getTodos = async () => {
    const res = await axios.get(
      "https://sum-server.100xdevs.com/todo?id=" + id
    );
    console.log(res.data.todo);
    setTodos(res.data.todo);
  };
  useEffect(() => {
    getTodos();
  }, [id]);

  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  );
}
