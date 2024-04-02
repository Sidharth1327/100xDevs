// Pushing the State Down //

 
/* function App() {
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

function Header(props) {
  return <div>{props.title}</div>;
}
 */

function App() {
  return (
    <>
      <HeaderwithButton></HeaderwithButton>
      <Header title="Sid"></Header>
    </>
  );
}
function HeaderwithButton(){
  const [firstTitle, setfirstTitle] = useState("My name is Sidharth");
  function updateTitle() {
    setfirstTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={firstTitle}></Header>
    </>  
  )  //only this part get rerenders //
}
function Header(props) {
  return <div>{props.title}</div>;
}