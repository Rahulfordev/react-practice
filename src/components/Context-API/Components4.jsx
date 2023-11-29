import { useContext } from "react";
import { UserContext } from "./UserContext";

/* eslint-disable react/prop-types */
const Components4 = () => {
  const { user, text } = useContext(UserContext);
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{text}</p>
    </div>
  );
};

export default Components4;
