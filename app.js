const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));



app.set('view engine','ejs');
// app.use(express.static('public'));

// const URL = 'mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/points'
mongoose.connect('mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/employee', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const employeeSchema = {
  lastName: String,
  firstName: String, 
  email: String, 
  workID: String, 
  vaccinate: {
    type: Boolean,
  },
  // dateOfVac: Date,
  infected: {
    type: Boolean,
  },
  // datePositiveTest: Date,
  // dateNegativeTest: Date, 
  quarantine: {
    type: Boolean, 
  },
  // quarantineStartDate: {
  //   type: Boolean, 
  // }
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
  const vacStatus = req.body.vacStatus;
  const infected = req.body.infected;
  const dateVac = req.body.dateVac;
  const datePostTest = req.body.datePositiveTest;
  // const dateNegativeTest = req.body.dateNegativeTest;
  const inQuarantine = req.body.quaratine;
  const quarDate = req.body.quarDate;

  
// console.log(dateVac);
console.log(vacStatus);
  const employee = new Employee({
    lastName: lastName,
    firstName: firstName,
    email: email,
    workID: workID,
    vaccinate: vacStatus,
    dateOfVac:dateVac,
    infected: infected,
    // datePositiveTest: datePostTest,
    // dateNegativeTest: dateNegativeTest,
    // quarantine: inQuarantine,
    // quarantineStartDate: quarDate


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
