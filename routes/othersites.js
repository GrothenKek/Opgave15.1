const controller = require("../Controllers/Controller");
const express = require('express');
const router = express.Router();
const fetch  = require('node-fetch');

router
    //post
    .get("/", async (req, res) => {
        res.send(await controller.getallsites());

        
    })
//get
    .get("/:site", async (req, res) => {
        const othersites = await controller.getallsites();
        const id = req.params.site;
       
       const address = othersites.find(site => site._id===id).address;
        const json = await fetch(address+'/api/jokes');
        const json2 = await json.json();
        res.send(json2);
        
        
    });



function sendStatus(e, response) {
    console.error("Exception " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}
module.exports = router;