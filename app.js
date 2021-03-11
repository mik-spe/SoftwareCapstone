const express = require('express');
const app = express();


app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/',function(req,res){
    res.render('index');
})

app.get('/test',function(reqm,res){
  res.render("test");
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));
