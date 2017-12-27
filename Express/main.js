let express = require("express");
let main = express();
const helpers = require('./helper.js')


main.get("/", function(req, res){
    console.log("hello");
    res.send("Hi there, welcome");
});

main.get("/repeat/:hello/:number", function(req, res){
    let saying = req.params.hello;
    let numberOf = req.params.number;
    const result = helpers.parse(saying, numberOf);
    res.send(result);
});

main.get("/:noise/:animal", function(req, res){
    let saying = req.params.noise;
    let mammal = req.params.animal;
    res.send("The " + mammal + " says " + saying);
});

main.get("*", function(req, res) {
        res.send("sorry, route not found");
});


main.listen(3000, function() {
console.log("server up and running");
});