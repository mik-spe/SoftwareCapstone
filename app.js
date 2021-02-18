const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));



app.set('view engine','ejs');
// app.use(express.static('public'));

// const URL = 'mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/points'
mongoose.connect('mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/messages', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const messageSchema = {
  name: String
}

const Item = mongoose.model("Item",messageSchema);

app.get('/',function(req,res){
    res.render('test');
})
app.post("/",function(req,res){
  const message = req.body.newMessage;
  console.log(message);
  const item = new Item({
    name: message
  });
  item.save(function(err){
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
