


import React, { useState, useCallback } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("ChildComponent rendering...");
  return <button onClick={onClick}>Click me</button>;
};

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // Regular callback function
  const handleClick = () => {
    console.log("Button clicked!");
    setCount((prevCount) => prevCount + 1);
  };

  // Memoized callback using useCallback
  const memoizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={memoizedHandleClick} />
    </div>
  );
};

export default CallbackExample;


/* In this example:

1. We import `useState` and `useCallback` from 'react'.
2. The `ChildComponent` receives a prop `onClick` and renders a button with that click handler.
3. The `CallbackExample` component maintains a `count` state and has two callback functions: `handleClick` and `memoizedHandleClick`.
4. `handleClick` is a regular callback function that increments the count and logs a message.
5. `memoizedHandleClick` is created using `useCallback`, and its dependency array (`[]`) indicates that it should only be re-created if the component mounts or unmounts.
6. The `ChildComponent` receives the memoized callback (`memoizedHandleClick`) as a prop.
7. As you click the button in the `ChildComponent`, the count increases, and you'll notice that the log statement inside `handleClick` is only printed once, thanks to `useCallback` preventing unnecessary re-creations of the callback.

> Using `useCallback` becomes more crucial when dealing with complex components or components with frequent re-renders, optimizing performance by avoiding unnecessary function creations.
> */