const mongoose = require("mongoose");



const jokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,

});



exports.Joke = mongoose.model("joke", jokeSchema);
