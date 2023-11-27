/* eslint-disable react/prop-types */
import { useState } from "react";
import "./faq.css";
const FAQ = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className="faq">
      <div>
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
