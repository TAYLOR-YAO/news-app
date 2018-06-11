const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
var mongoose = require('mongoose');


const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function(req,res){
    res.render("index");
});




mongoose.connect('mongodb://localhost/news_db', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});