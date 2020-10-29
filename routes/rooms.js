
const controller = require("../Controllers/Controller");
const express = require('express');
const router = express.Router();



router


.get("/", async (req, res) => {
    res.send(await controller.getRooms());
    
})

.get("/:roomName/messages", async (req, res) => {
    res.send(await controller.getMessages(req.params.room));
    
});

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;

