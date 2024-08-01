
 const express = require("express");

 const app = express();

 app.get('/', (req,res)=>{
  return res.send(`Hello ${req.query.name}`);
 })

 app.get("/about", (req, res) => {
   return res.send("Hello from about page");
 });

 /* const myServer = http.createServer(app);

 myServer.listen(8000, ()=>console.log("server started")); */
 app.listen(8000, () => console.log("Server Started"));


 console.log("Hi there , couldnt study anythign today since I was busy with editing")