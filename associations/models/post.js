let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// POST - title, content

let postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model("Post", postSchema);