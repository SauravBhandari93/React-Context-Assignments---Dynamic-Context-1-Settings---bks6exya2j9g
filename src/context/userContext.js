import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const [greeting, setGreeting] = useState("Hello");
  // const greeting = "Hello";

  const changeGreeting = (item) => {
    console.log(item);
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
