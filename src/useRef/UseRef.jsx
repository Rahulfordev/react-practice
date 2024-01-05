import { useRef } from "react";
import { useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRef;
