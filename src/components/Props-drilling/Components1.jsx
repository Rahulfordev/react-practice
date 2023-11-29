import { useState } from "react";
import Components2 from "./Components2";

const Components1 = () => {
  const [user, setUser] = useState({ id: 1, name: "rahul ali" });
  return (
    <div>
      <Components2 user={user} />
    </div>
  );
};

export default Components1;
