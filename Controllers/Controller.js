const  mongoose  = require("mongoose");
const chat = require('../models/models.js');
const config = require('../config.js');
const model = require('../models/models.js');
const { Room,Message } = model;


mongoose.connect(config.databaseURI, { useNewUrlParser: true, useUnifiedTopology: true});


exports.getRooms = async function(){
    return   await Room.find();
    
};

exports.getMessages = async function(rooms){
    const roomName = req.params.roomName;
    const messages = await Message.find();
    // const messages = await Message.find()
    //     .select("-room -__v")
    //     .where("room")
    //     .eq(await Room.findOne().where("name").eq(rooms));
    return messages;
}


exports.postMessage = async function(body){
    const { name, text, room: roomName } = body;
    let room = await Room.findOne().where("name").eq(roomName).exec();
    if (!room) room = await Room.create({ name: roomName });

    return await Message.create({
            name: name,
            room: room,
            text: text,
        
    });


}

    exports.deleteMessage = async function(id){
        let messageDeleted = await Message.deleteOne().where("_id").eq(id);
        res.sendStatus(messageDeleted.deletedCount ? 200 : 404);
    }
       


exports.getMessages = function(){
    return  chat.Message.find().populate('messages').exec();
}



//app.get("/messages", async (req, res) => {
//    const messages = await Message.find();
//    res.send(messages);
//});

