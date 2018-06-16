const request = require("request");
const cheerio = require("cheerio");

const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req,res){
        db.Article.find({}).then(function(dbArticle){
            console.log(dbArticle);
            res.render("index",{infos:dbArticle});
        });
 
    });
    app.get("/articles", function(req,res){
        request("http://www.dailymail.co.uk/ushome/index.html", function(error, response, html) {
            var $ = cheerio.load(html);
           //   console.log($)
            $("#content > div:nth-child(2) > div:nth-child(3) > div.alpha > div:nth-child(1) > div:nth-child(2) > div > h2 > a").each(function(i, element) {
            // console.log(element)
            var articlesArray = [];
            var postArticle = {};
            postArticle.title = $(element).text();
            // console.log(title)
            postArticle.link= $(element).attr("href");
            articlesArray.push(postArticle)
            console.log(articlesArray)
            res.json(postArticle)
            });

        });
    })
}