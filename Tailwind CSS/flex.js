export default function Test() {
  return <div style ={{display : "flex", justifyContent:"center"}}>
    <div style = {{background : "red"}}>My name is Sid</div>
  </div>
}

// this is how you do it in raw HTML, CSS and JS

export default function Test() {
  return <div className = "flex justify-between">
    <div style = {{background : "red"}}>My name is Sid</div>
    <div style = {{background : "green"}}>My name is Sidhu</div>
    <div style = {{background : "blue"}}>My name is Sidharth</div>
  </div>
}

// This is how you will be doing in Tailwind CSS