import { useReducer } from "react";

const redecer = (state, action) => {
  if (action === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

const init = {
  count: 0,
};

const Reducer = () => {
  const [state, depatch] = useReducer(redecer, init);
  return (
    <div>
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => depatch("increment")}>Increment</button>
        <button onClick={() => depatch("decrement")}>decrement</button>
      </div>
    </div>
  );
};

export default Reducer;
