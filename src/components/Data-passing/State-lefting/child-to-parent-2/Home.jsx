import Todos from "./Todos";
import NewTodos from "./NewTodos";
import { useState } from "react";

const todoList = ["item1", "item2"];
const Home = () => {
  const [todos, setTodos] = useState(todoList);
  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodos onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
