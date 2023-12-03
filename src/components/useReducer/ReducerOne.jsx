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
  // check,,, why use spreed
  if (action === "increment2") {
    return {
      ...state,
      count2: state.count2 + 1,
    };
  }

  if (action === "decrement2") {
    return {
      ...state,
      count2: state.count2 - 1,
    };
  }
};

const init = {
  count: 0,
  count2: 0,
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
      <div>
        <h1>{state.count2}</h1>
        <button onClick={() => depatch("increment2")}>Increment2</button>
        <button onClick={() => depatch("decrement2")}>decrement2</button>
      </div>
    </div>
  );
};

export default Reducer;
