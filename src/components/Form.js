import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";

const Form = ({ title, setTitle, todos, setTodos, editTodo, setEditTodo }) => {
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
    } else {
      setTitle("");
    }
  }, [setTitle, editTodo]);

  const updateTodo = (title, id, completed) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { title, id, completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    setEditTodo("");
    toast.success("Todo Updated");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuid(), title: title, completed: false }]);
      setTitle("");
      toast.success("Todo Added");
    } else {
      updateTodo(title, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo Here"
        className="task-input"
        required
        value={title}
        onChange={handleChange}
        autoFocus
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
