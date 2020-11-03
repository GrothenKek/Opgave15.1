const controller = require("../Controllers/Controller");
const express = require('express');
const router = express.Router();

router
//post
.post("/",async (req, res) =>{
    res.send(await controller.postJoke(req.body));
})
//get
.get("/", async(req,res)=>{
    res.send(await controller.getJokes());
});

function sendStatus(e, response){
    console.error("Exception " + e);
    if(e.stack) console.error(e.stack);
    response.status(500).send(e);
}
module.exports = router;