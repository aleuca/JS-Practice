let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});
mongoose.Promise = global.Promise;

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model("Cat", catSchema);


// let george = new Cat({
//     name: "Norris",
//     age: 110,
//     temperament: "evil"
// });

// george.save(function(err, cat) {
//     if(err) {
//         console.log("something is wrong");
//     } else {
//         console.log("saved cat to db", cat);
//     }
// });

Cat.create({
    name: "Dixie",
    age: 12,
    temperament: "nasty"
}, function(err, cat) {
    if(err) {
        console.log("couldn't create");
    } else {
        console.log(cat)
    };
});

Cat.find({}, function(err, cats){
    if(err) {
        console.log("oh no error");
        console.log(err);
    } else {
        console.log(cats);
    };
});