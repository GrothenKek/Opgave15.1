const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: String,
});

const msgSchema = new mongoose.Schema({
    name: String,
    //room: String,
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    text: String,
});

const jokeSchema = new mongoose.Schema({
    Setup: String,
    punchLine: String,

});

exports.Joke = mongoose.model("joke", jokeSchema);
exports.Room = mongoose.model("Room", roomSchema);
exports.Message = mongoose.model("Message", msgSchema);