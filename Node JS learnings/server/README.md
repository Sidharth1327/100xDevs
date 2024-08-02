# Express.js Simple Server Example

This project demonstrates a basic Express.js server with two routes: a root route and an about route. The server listens on port 8000 and responds to GET requests.

## Prerequisites

Before you begin, ensure you have Node.js and npm (Node Package Manager) installed on your system.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the necessary dependencies by running the following command:

   ```bash
   npm install express
Usage
To start the server, run the following command:

bash
Copy code
node server.js
(Assuming your file is named server.js)

You should see the following message indicating that the server has started:

bash
Copy code
Server Started
Routes
Root Route
URL: /
Method: GET
Query Parameters: name (optional)
Description: Responds with a greeting message including the provided name.
Example:

bash
Copy code
http://localhost:8000/?name=John
Response:

Copy code
Hello John
If no name query parameter is provided, the response will be:

Copy code
Hello 
About Route
URL: /about
Method: GET
Description: Responds with a message from the about page.
Example:

bash
Copy code
http://localhost:8000/about
Response:

csharp
Copy code
Hello from about page
Code Explanation
javascript
Copy code
const express = require("express");

const app = express();

app.get('/', (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.get("/about", (req, res) => {
  return res.send("Hello from about page");
});

app.listen(8000, () => console.log("Server Started"));
Import Express:

javascript
Copy code
const express = require("express");
Initialize Express App:

javascript
Copy code
const app = express();
Define Routes:

Root route:
javascript
Copy code
app.get('/', (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});
About route:
javascript
Copy code
app.get("/about", (req, res) => {
  return res.send("Hello from about page");
});
Start the Server:

javascript
Copy code
app.listen(8000, () => console.log("Server Started"));