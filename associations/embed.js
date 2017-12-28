let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/embedding", {useMongoClient: true});

// POST - title, content

let postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

let Post = mongoose.model("Post", postSchema);

// USER - email, name

let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema],
});

let User = mongoose.model("User", userSchema);


// let newUser = new User({
//     email: "al@gmail.com",
//     name: "Al Blah"
// });

// newUser.posts.push({
//     title: "how to brew polypotion",
//     content: "use the women's bathroom"
// })

// newUser.save(function(err, user){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// let newPost = new Post({
//     title: "reflections on apples",
//     content: "they are delicaios"
// });

// newPost.save(function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Al Blah"}, function(err, user) {
    if(err) {
        // console.log(err);
    } else {
        user.posts.push({
            title: "three things I really hate",
            content: "voldemort voldemort voldemort"
        });
        user.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});