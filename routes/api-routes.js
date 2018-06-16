
const db = require("../models");

module.exports = function(app) {
    app.post("/scrape", function(req,res){
      
        db.Article.create(req.body).then(function(dbArticle){
            console.log(dbArticle)
        });
    });
  
    
}