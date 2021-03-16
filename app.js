const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.urlencoded({extended:true}));



app.set('view engine','ejs');
// app.use(express.static('public'));

// const URL = 'mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/points'
mongoose.connect('mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/employee', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const employeeSchema = {
  lastName: String,
  firstName: String, 
  email: String, 
  workID: String,
  datePositiveTest: {
    type: Date
  },
  dateNegativeTest: 
  {
    type: Date
  },
  vacStatus: {
    type: Boolean,
    default: false
  }
  
}

const Employee = mongoose.model("Employee",employeeSchema);

app.get('/',function(req,res){
    res.render('test');
})
app.post("/",function(req,res){
  const lastName = req.body.lname; 
  const firstName = req.body.fname;
  const email = req.body.email;
  const workID = req.body. workID;
  const datePostTest = req.body.datePositiveTest;
  const dateNegativeTest = req.body.dateNegativeTest;
  let vacStatus = req.body.vacStatus;
  if(vacStatus){
    vacStatus = true;
  }else{
    vacStatus = false;
  }
  console.log(vacStatus);
  // const infected = req.body.infected;
  // const dateVac = req.body.dateVac;
  // const datePostTest = req.body.datePositiveTest;
  // const dateNegativeTest = req.body.dateNegativeTest;
  // const inQuarantine = req.body.quaratine;
  // const quarDate = req.body.quarDate;

  const employee = new Employee({
    lastName: lastName,
    firstName: firstName,
    email: email,
    workID: workID,
    datePositiveTest: datePostTest,
    dateNegativeTest: dateNegativeTest,
    vacStatus: vacStatus


  });
  employee.save(function(err){
    if(err){
      console.log("err");
    }else{
      console.log("save");
    }
  });
  res.redirect('/');
});

const port = process.env.PORT || 3000
// const port2 = 5300
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));
