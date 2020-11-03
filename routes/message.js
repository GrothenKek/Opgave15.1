const controller = require("../controllers/controller.js");
const express = require('express');
const router = express.Router();



router
.post("/",async (req,res)=>{
    res.send(await controller.postMessage(req.body));
})

.delete("/", async (req, res) => {
   res.send(await controller.deleteMessage(req.params.id));

});

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}
module.exports = router;
