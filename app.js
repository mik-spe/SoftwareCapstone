var path = require('path')
const express = require("express");
const cookieParser = require("cookie-parser");
const {requireAuth, checkUser} = require ('./middleware/authMiddleware')

//router
const authRoutes = require("./routes/authRoutes");
const app = express();
var port = process.env.PORT ||3000;

//midleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());



//veiw engine
app.set('view engine','ejs');

app.listen(port)
//routes
app.get('*',checkUser);
app.get("/",requireAuth , (req, res) => res.render("index"));
app.get("/test",requireAuth , (req, res) => res.render("test"));
app.get('/faq',requireAuth ,(req,res) => res.render("faq"))
app.get('/announcements', requireAuth ,(req,res) => res.render("announcements"))
app.use(authRoutes);
