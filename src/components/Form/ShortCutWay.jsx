import { useState } from "react";
import ShowData from "./ShowData";
import "./form.css";
const ShortCutWay = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserData] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      email,
      password,
    };
    setUserData([...userdata, userInfo]);
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="email"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {userdata.map((user, index) => (
        <ShowData key={index} user={user} />
      ))}
    </div>
  );
};

export default ShortCutWay;
