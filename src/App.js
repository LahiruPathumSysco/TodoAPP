import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header name="Todo List" />
        </div>
        <div>
          <Form
            title={title}
            setTitle={setTitle}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
