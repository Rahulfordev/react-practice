import { useState, useEffect } from "react";
import "./dynamic.css";
const DynamicColorInput = () => {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length > 2) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        // style={{ backgroundColor: validInput ? "green" : "red" }}
        // className={`${validInput ? "valid" : "invalid"}`}
        className={`${validInput && "valid"}`}
      />
    </div>
  );
};

export default DynamicColorInput;
