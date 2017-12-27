let express = require("express");
let app = express();
let parser = require("body-parser");

app.use(parser.urlencoded({extended: true}));
app.set("view engine", "ejs");
let friends = ["Misha", "Dan", "Lea", "Teja"];


app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req,res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res){
    res.send("you've hit the * route");
});

app.listen(3000, function(){
    console.log("server running");
});