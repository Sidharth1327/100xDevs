/* Create a Header Compoennt , a title as prop & render it inside a div, top level App renders two Headers */

function App() {
  return (
    <div>
      <Header title="Sidhu"></Header>
      <Header title="Sid"></Header>
    </div>
  );
}

function Header(props) { 
  return(
    <div>{props.title}</div>
  )
}


/* Why do components can return onyl one single child ??
   Soln : In React, components are the building blocks of the user interface, and each component represents a single DOM element when rendered. React enforces the rule that a component's render() method can return only a single element or component. This restriction exists because React needs a single root element to attach to the DOM when rendering a component.
   When a component returns multiple elements directly from its render() method, React doesn't have a clear single root element to attach to the DOM, which can lead to ambiguity and issues with rendering and updating. To address this, React requires components to encapsulate multiple elements within a single parent element. This parent element serves as the single root element returned by the component's render() method, providing clarity and consistency in the rendering process.

   Usage of react Fragment is a better solution as it doesnt introduce an extra DOM element.
*/