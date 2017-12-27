let express = require("express");
let app = express();

app.get("/", function(req, res) {
    res.send("hi");
});

app.get("/bye", function(req, res) {
    res.send("bye");
});

app.get("/:comment/:id", function(req, res) {
    let subreddit = req.params.comment;
    res.send("welcome, this is " + subreddit);
    console.log( "welcome, this is " + subreddit);
});

app.get("*", function(req, res) {

    res.send("meow");
});

app.listen(3000, function() {
console.log("Server running");
});