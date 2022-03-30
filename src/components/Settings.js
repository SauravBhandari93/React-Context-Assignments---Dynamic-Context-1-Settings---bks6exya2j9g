import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const Settings = () => {
  // to be implemented in context
  const { changeGreeting, greeting } = useContext(UserContext);

  console.log(greeting);

  return (
    <div style={{ border: "5px solid red", padding: "8px" }} id="settings">
      <h4>Settings</h4>
      <input
        type={"text"}
        onChange={() => {
          changeGreeting(event.target.value);
        }}
      />
    </div>
  );
};
