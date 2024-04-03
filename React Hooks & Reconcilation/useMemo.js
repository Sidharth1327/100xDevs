/* Problem Statement : - 
Cretae an app that does two things:
1. Increase the counter by 1 
2. Lets user input an value  and you need to show the sum from 1-n 
One restriction : Everything should be inside App, no multiple components are allowed. */


import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

/*   let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
  } */

/*   Here one problem is that if I update counter, still the sum part also get re rendered unnecesarily, so we need to re render it only when the input value changes.
  This can be achieve through using useMemo
 */
  let count = useMemo(() =>{
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    } 
    return count;
  }, [inputValue]);

  /* This can also be done using useEffect but we have to define an extra state variable.UseMemo is slighly better because here two re renderign happens, but in useMemo, thats not the case.*/

  /* 
  const [count, setCount] = useState(0);
  useEffect(() =>{
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    } 
    return count;
  }, [inputValue]); */

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
