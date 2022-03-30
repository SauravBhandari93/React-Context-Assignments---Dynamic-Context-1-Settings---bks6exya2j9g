import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const [greeting, setGreeting] = useState("Hello");

  const changeGreeting = (item) => {
    setGreeting(item);
  };

  return (
    <UserContext.Provider
      value={{ greeting: greeting, changeGreeting: changeGreeting }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export { Wrapper, UserContext };
