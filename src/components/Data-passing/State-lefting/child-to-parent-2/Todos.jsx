import Todo from "./Todo";

/* eslint-disable react/prop-types */
const Todos = (props) => { 
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
