import { useState } from "react";
import Components2 from "./Components2";
import { UserContext } from "./UserContext";

const Components1 = () => {
  const [user, setUser] = useState({ id: 101, name: "rahul ali" });
  const [text, setText] = useState("this is useState");
  return (
    <UserContext.Provider value={{ user, text }}>
      <Components2 />
    </UserContext.Provider>
  );
};

export default Components1;
