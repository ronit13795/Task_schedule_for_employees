import React from "react";

export default function Task(props) {
  return (
    <div style={{ border: "1px solid black", backgroundColor: "ghostwhite" }}>
      <p>task name: {props.name}</p>
      <p>task responsibility : {props.responsibility}</p>
    </div>
  );
}
