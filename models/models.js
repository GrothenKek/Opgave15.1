const mongoose = require("mongoose");



const jokeSchema = new mongoose.Schema({
    Setup: String,
    punchLine: String,

});

exports.Joke = mongoose.model("joke", jokeSchema);
