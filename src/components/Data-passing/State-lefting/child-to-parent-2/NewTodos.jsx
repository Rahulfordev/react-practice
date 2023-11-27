/* eslint-disable react/prop-types */
import { useState } from "react";

const NewTodos = (props) => {
  const [todo, setTodo] = useState("");
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todos">New Todos</label>
        <input
          type="text"
          id="todos"
          name="todos"
          value={todo}
          onChange={handleInputChange}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default NewTodos;
