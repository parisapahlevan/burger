var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json())

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main" 
}))


app.set("view engine", "handlebars")

var routes = require("./burger/controllers/burgers_controller");
app.use(routes)

app.listen(PORT, function(){
    console.log("Listening On Port ", PORT)
})