import { useReducer } from "react";
import { reducer } from "./ReducerTwoByFunction.js";

const init = {
  count: 0,
};

const ReducerTwo = () => {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default ReducerTwo;
