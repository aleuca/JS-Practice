let express = require("express");
let app = express();
let request = require("request");


app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";

    request(url, function(error, response, body){
        if(!error) {
            let parsedBody = JSON.parse(body);
            res.render("results", {data: parsedBody});
            // res.send(parsedBody["Title"]);
        } else {
            console.log(error);
        };
    });
});

app.listen(3000, function() {
    console.log("server running");
});