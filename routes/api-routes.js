
const request = require("request");
const cheerio = require("cheerio");

const db = require("../models");

module.exports = function(app) {
    app.get("/scrape", function(req,res){
        request("http://www.dailymail.co.uk/ushome/index.html", function(error, response, html) {
            var $ = cheerio.load(html);
           //   console.log($)
            $("#content > div:nth-child(2) > div:nth-child(3) > div.alpha > div:nth-child(1) > div:nth-child(2) > div > h2 > a").each(function(i, element) {
            // console.log(element)

            var title = $(element).text();
            // console.log(title);
            var link = $(element).attr("href");
            //console.log(link);
            // const ScrapedArticle = {link, title}
            // console.log(ScrapedArticle)
                db.Article.create(
                    {
                        link:link, 
                        title:title
                    }).then(function(dbArticle){
                    console.log(dbArticle)
                });
            });

        });
    });
  
    
}