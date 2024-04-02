/* Update the previous app that allow users to update the title of the first Header with a new title */

function App() {
  const [title, setTitle] = useState("My name is Sidharth");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick = {updateTitle}>Update the Title</button>
      <Header title = {title}></Header>
      <Header title = "Sid"></Header>
    </>
  );
}

function Header(props) {
  return <div>{props.title}</div>;
}

/* Suppose if you want to define the updateTitle function outside the App(), you have to pass the setTitle fucntion as an argument 
   Here is how you will do that  :-   
*/
import React, { useState } from "react";

function updateTitle(setTitle) {
  setTitle("My name is " + Math.random());
}

function App() {
  const [title, setTitle] = useState("My name is Sidharth");

  return (
    <>
      <button onClick={() => updateTitle(setTitle)}>Update the Title</button>
      <Header title={title}></Header>
      <Header title="Sid"></Header>
    </>
  );
}

function Header(props) {
  return <div>{props.title}</div>;
}

export default App;