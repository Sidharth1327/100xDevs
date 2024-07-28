# JavaScript Concepts

## How JavaScript Works & Execution Context

### Execution Context

- **Variable Environment**
    - All variables and codes
- **Thread of Execution**
    - Codes are executed line by line

JavaScript is a synchronous, single-threaded language, meaning it can execute only one line at a time and in a specific order.

## How JavaScript is Executed

JavaScript execution happens in two phases:

1. **Memory Allocation Phase**
    - Memory is allocated for variables and functions.
    - Variables are initialized as `undefined`.
    - Functions are stored as the entire code.

2. **Execution Phase**
    - Variables are assigned their values.
    - When a function invocation is encountered, a new execution context is created, and the two phases happen again for the new context.
    - Once the new execution context is done, it is deleted, and JavaScript continues executing the next line in the global execution context.

This process is managed by the **Call Stack**. The global execution context goes first, followed by any new execution contexts. Once a new execution context finishes, control returns to the global execution context.

> “Call Stack maintains the order of execution of execution contexts.”

## Hoisting in JavaScript

Hoisting allows accessing functions and variables even before initializing them. 

- **Function Declaration:** The function is copied as it is in the memory allocation phase.
- **Arrow Function:** Treated as a variable and initialized as `undefined`. Accessing it before initialization results in an error.

## How Functions Work in JavaScript & Variable Environment

Functions follow the same concepts discussed above with execution context and hoisting.

## Window and `this` Keyword

In a browser, the JavaScript engine creates a global object called `window` along with the global execution context. The `this` keyword points to the global object.

## `undefined` and `not defined`

- **`undefined`:** A placeholder until a variable gets assigned.
- **`not defined`:** A variable that hasn't been declared.

## Scope Chain, Scope, and Lexical Environment

- **Scope:** Where you can access variables and functions.
- **Lexical Environment:** The local environment along with the lexical environment of its parent.
- **Scope Chain:** All local execution contexts look for their variables in their lexical environment.

## `let` and `const` Declarations, Temporal Dead Zone

- **Hoisting:** `let` and `const` are hoisted but have a temporal dead zone and are hoisted in the script scope, not the global scope.
- **`let`:** More strict, redeclaration gives a syntax error.
- **`const`:** Even more strict, must be assigned during declaration.

## Block, Scope, and Shadowing in JavaScript

- **Block:** A compound statement grouping multiple statements together.
- **Block Scope:** Variables declared inside a block are scoped to that block.
- **Shadowing:** A variable declared inside a block can shadow a global variable with the same name.

## Closure in JavaScript

A function along with its lexical scope forms a closure.

### Uses of Closures

- Module design pattern
- Memoization
- `setTimeout`
- Iterators
- Currying

### Example of Closure

```javascript
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); // [Function: y]
z(); // 7
setTimeout + Closures - Interview Questions
JavaScript doesn’t wait; it keeps executing.
Closures can be used for data hiding and encapsulation.
Unused variables are automatically deleted by garbage collectors in high-level programming languages.
Closures allocate a lot of memory which cannot be deleted, a disadvantage.
Some browsers now have smart garbage collectors that automatically delete variables not used outside closures.
Promises
Understanding async and await
async Function: Allows the use of await inside it and automatically returns a Promise.
await Keyword: Pauses the execution of the async function until the Promise is resolved or rejected.
Example with async and await
javascript
Copy code
// A function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Simulating success or failure
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

// Using async and await
async function getData() {
  try {
    let data = await fetchData(); // Waits for the Promise to resolve
    console.log(data); // "Data fetched successfully!" (after 2 seconds)
  } catch (error) {
    console.error(error); // If the Promise is rejected
  }
}

getData(); // Call the async function
Explanation
async Function: Declares getData as async, allowing the use of await.
await Keyword: Pauses execution until the Promise is resolved.
Error Handling: Uses try...catch to handle errors.
Benefits of async/await
Readability: Code looks more like synchronous code.
Error Handling: Straightforward with try...catch.
Chaining: Avoids complex chaining of .then() and .catch().
Summary
async and await provide a more readable and maintainable way to handle asynchronous operations.
async functions return a Promise.
await pauses the execution of the async function until the Promise is resolved or rejected.
Error Handling: Use try...catch blocks to handle errors when using await.