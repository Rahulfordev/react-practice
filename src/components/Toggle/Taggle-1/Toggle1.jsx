import { useState } from "react";

const Toggle1 = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          voluptate, ipsa nam obcaecati voluptates ducimus in facilis a odit
          laboriosam eveniet et quas est impedit molestias deserunt! Ea, cumque
          nostrum.
        </p>
      )}
      <div>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle1;
