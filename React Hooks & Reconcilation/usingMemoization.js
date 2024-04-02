function App() {
  const [title, setTitle] = useState("My name is Sidharth");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title}></Header>
      <Header title="Sid"></Header>
    </>
  );
}
// This is a component where the props are unchanged. So we can  use memoization here //
/* function Header(props) {
  return <div>{props.title}</div>;
}
 */
const Header = React.memo(function Header(props) {
  return <div>{props.title}</div>;
});

// Memoization is not actually an alternative for Pushing the state down. It depends on the scenarios. Suppose if multiple components need access to same state or if the state has to be managed in a higher level in the compoent tree because of data flow, we may have to lift the state up  to a higher level compoennt or use state management libraries liek Redux.
