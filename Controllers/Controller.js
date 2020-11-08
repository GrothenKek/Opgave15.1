const  mongoose  = require("mongoose");
const jokes = require('../models/models.js');

const config = require('../config.js');
const model = require('../models/models.js');
const { setup,punchline } = model;
const fetch = require('node-fetch');

const URI = `mongodb+srv://Grothen:p4ndek4gek0ngen@jokeservice.0lfnc.mongodb.net/jokesdb?retryWrites=true&w=majority`

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

//exports


// get Jokes
exports.getJokes = async function () {
    return await    jokes.Joke.find();
}

//post joke
exports.postJoke = async function (body) {
    const {setup,punchline } = body;
    
    let res =  await jokes.Joke.create({
        setup: setup,
        punchline: punchline,
    });
    return res;
}
exports.postservice = async function (body) {
    const {name,address,secret} = body;
    let res  = await jokes.service.create({
        name : name,
        address : address,
        secret : secret,

    });
    return res;
}

exports.getallsites = async function(){
    let url = "https://krdo-joke-registry.herokuapp.com/api/services";
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error(response.status);
    }
    const json = await response.json()
   
    return json;
}

exports.postservice = async function() {

    const all = getallsites();
    console.log(all);

    if (all.find("PandeKageKongerne")) {


    }
    else {
        let name = "PandeKageKongerne";
        let address = "https://pandekagekongerne.herokuapp.com/";
        let secret = "mySecret";
        let newService = await fetch('/api/services', {


            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                address: address,
                secret: secret
            }),
        });

    }
}


    

       
    










