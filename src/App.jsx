import React from "react";

export default function App() {
  function clickHandler() {
    console.log("I am in a function");
  }
  return (
    <div>
      <h1>Events</h1>
      <p>Events are similar to normal JavaScript</p>
      <button onClick={() => console.log("It works!")}>
        Click me to hear the secret
      </button>
      <button onClick={clickHandler}> Trigger the clickHandler function</button>
      <button onClick={() => console.log("Clicked button!")}>Click me!</button>
    </div>
  );
}
