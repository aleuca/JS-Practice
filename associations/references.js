let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/references", {useMongoClient: true});

let Post = require("./models/post");
let User = require("./models/user");

// USER - email, name



// User.create({
//     email: "bob@gmail.com",
//     name: "BobBelcher"
// });

// Post.create({
//     title: "how to cook the best burger pt 4",
//     content: "blah blah bleh"
// }, function(err, post) {
//     User.update({email: "bob@gmail.com"}, { $push: { "posts": post }}, function(err, updatedUser) {
//         if(err) {
//             console.log("ERROR:", err);
//         } else {
//             console.log("Updated!", updatedUser);
//         }
//     })
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});