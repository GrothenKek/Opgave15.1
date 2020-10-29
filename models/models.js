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

exports.Room = mongoose.model("Room", roomSchema);
exports.Message = mongoose.model("Message", msgSchema);