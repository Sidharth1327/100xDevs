 /* Keys in React */
 /*  Problem Statement : Create simple ToDo app which renders 3 todos
  1. Create a todo component that accepts title, description as input 
  2. Initialise a state array that has 3 todos
  3. Iteratee over the array to render all the todos
  4. a button in the top level App compnent to add a new ToDo 
*/

let counter =3;
function App(){
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "learn React",
      description: "Complete 20%",
    },
    {
      id: "2",
      title: "Build a todo App",
      description: "A simple to do  app to learn concept of keys",
    },
    {
      id: "3",
      title: "Deploy my app",
      description: "Deploy your productuion ready app",
    },
  ]);
  
  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title : Math.random(),
      description : Math.random()
    }])
  }

  return(
    <div>
      <button onClick = {addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description = {todo.description}></Todo>)}
    </div>
  )

}

function Todo({title, description}){
  return(
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}
