const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mongoose = require('mongoose');
const db = require("./models");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);
require("./routes/html-route")(app);

mongoose.connect('mongodb://localhost/news_db', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});