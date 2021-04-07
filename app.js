var path = require('path')
const express = require("express");
//const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
//router
const authRoutes = require("./routes/authRoutes");
const app = express();
var port = process.env.PORT ||3000;

//midleware
app.use(express.static('public'));



//veiw engine
app.set('view engine','ejs');

// database connection

//const dbURI =
//  "mongodb+srv://Nathan:TrlDs2mXMnPbjEAP@cluster0.a6xht.mongodb.net/node-auth";
//  mongoose
//  .connect(dbURI, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useCreateIndex: true,
//  })
//  .then((result) => app.listen(port))
//  .catch((err) => console.log(err));

app.listen(port)

//routes
app.get("/", (req, res) => res.render("index"));
app.get("/test", (req, res) => res.render("test"));
app.get('/faq',(req,res) => res.render("faq"))
app.get('/announcements',(req,res) => res.render("announcements"))
app.use(authRoutes);


/* // Database Data
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('employees');
const url = 'https://beakon-employee.herokuapp.com/employees';

fetch('https://beakon-employee.herokuapp.com/employees')
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
}); */

// api url
const api_url = 
      "https://beakon-employee.herokuapp.com/employees";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi("https://beakon-employee.herokuapp.com/employees");
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>LastName</th>
          <th>FirstName</th>
          <th>Email</th>
          <th>workID</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.lastName} </td>
    <td>${r.firstName}</td>
    <td>${r.email}</td> 
    <td>${r.workID}</td>          
    </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}