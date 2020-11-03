const  mongoose  = require("mongoose");
const jokes = require('../models/models.js');
const config = require('../config.js');
const model = require('../models/models.js');
const { setup,punchline } = model;

const URI = `mongodb+srv://Grothen:p4ndek4gek0ngen@jokeservice.0lfnc.mongodb.net/jokesdb?retryWrites=true&w=majority`

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

//exports

// get Jokes
exports.getJokes = async function () {
    return await jokes.Joke.find();
}

//post joke
exports.postJoke = async function (body) {
    const { setup, punchline } = body;


    return await joke.create({
        setup: setup,
        punchline: punchline,
    });
}



