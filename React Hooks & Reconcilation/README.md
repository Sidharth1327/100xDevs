# Rerendering in React
###### Rerendering in React refers to the process of updating and rendering components to reflect changes in the application's state or props. When there's a change in the state or props of a component, React re-renders that component and any affected child components. It's important to note that a rerender doesn't necessarily mean a complete re-rendering of the entire DOM; instead, React efficiently updates only the necessary parts of the DOM.

### When does a re-render happen?
###### 1. Changes in a state variable utilized within the component.
###### 2. A re-render of a parent component, which subsequently triggers the re-rendering of all its child components. This cascading effect ensures synchronization throughout the component tree.

### How to get rid of unnecessary re-renders ?
###### There are broadly 2 ways of minimizing the amount of rerenders

###### 1. Push the State down
<small>`Pushing the state down` in React refers to the practice of managing state at the lowest possible level in the component tree. By doing so, you localize the state to the components that absolutely need it, reducing unnecessary re-renders in higher-level components.

 When state is kept at a higher level in the component tree, any changes to that state can trigger re-renders for all child components, even if they don't directly use or depend on that particular piece of state. However, by `pushing the state down` and ensuring that each component only has access to the state it needs, you can minimize the impact of state changes on the overall component tree.</small>

###### 2. By Using Memoization
<small> `Memoization` helps in skipping re-rendering when its props are unchanged. Memoization in React, achieved through the useMemo hook, is a technique used to optimize performance by memoizing (caching) the results of expensive calculations.
<br>
In the context of minimizing re-renders, useMemo is often employed to memoize the results of computations derived from state or props. By doing so, you can ensure that the expensive computation is only performed when the dependencies (specified as the second argument to useMemo) change.

#### <i> Memoization is not actually an alternative for Pushing the state down. It depends on the scenarios. Suppose if multiple components need access to same state or if the state has to be managed in a higher level in the compoent tree because of data flow, we may have to lift the state up  to a higher level compoennt or use state management libraries liek Redux. </i>

## Keys in react
<small>In React, when rendering a list of elements using the `map` function, it is crucial to assign a unique `key` prop to each element. The "key" is a special attribute that helps React identify which items have changed, been added, or been removed. This is essential for efficient updates and preventing unnecessary re-renders of the entire list.

When the `key` prop is not provided or not unique within the list, React can't efficiently track the changes, leading to potential issues in the application's performance and rendering.</small>

## Wrapper Components
<small>In React, wrapper components are used to encapsulate and group common styling or thematic elements that need to be applied consistently across different parts of an application. These components act as containers for specific sections or functionalities, allowing for a clean and modular structure.</small>

## React Hooks
<small>React Hooks are functions that allow functional components in React to have state and lifecycle features that were previously available only in class components. 
* Using these hooks, developers can manage state, handle side effects, optimize performance, and create more reusable and readable functional components in React applications. Each hook serves a specific purpose, contributing to a more modular and maintainable codebase.

<small> Some commonly used React Hooks are: useEffect, useMemo, useCallback,  useRef, useReducer, useContext, useLayoutEffect

### Side Effects
In the context of React, `side effects` refer to operations or behaviors that occur outside the scope of the typical component rendering process. These can include data fetching, subscriptions, manual DOM manipulations, and other actions that have an impact beyond rendering the user interface.

Thus, "side effects" are the operations outside the usual rendering process, and "hooks," like **`useEffect`**, are mechanisms provided by React to handle these side effects in functional components. The **`useEffect`** hook allows you to incorporate side effects into your components in a clean and organized manner.

1. UseEffect () 
- useEffect is a React Hook used for performing side effects in functional components. It is often used for tasks such as data fetching, subscriptions, or manually changing the DOM. The useEffect hook accepts two arguments: a function that contains the code to execute, and an optional array of dependencies that determines when the effect should run.
- useEffect is a powerful tool for managing side effects in React components, providing a clean way to handle asynchronous operations and component lifecycle events.
- axios library make it easy to do fetch calls
