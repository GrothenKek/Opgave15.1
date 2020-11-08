const mongoose = require("mongoose");



const jokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,

});

const serviceSchema = new mongoose.Schema({
    name : String,
    address : String,
    secret: String

})

exports.service = mongoose.model('service',serviceSchema);
exports.Joke = mongoose.model("joke", jokeSchema);
