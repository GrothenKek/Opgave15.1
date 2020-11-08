// app.js
const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const hbs = require('hbs');

// TODO slet 
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/api/Jokes', require('./routes/Jokes.js'));
app.use('/api/othersites', require('./routes/othersites.js'));
app.use(cors);

const port = process.env.PORT || config.localport // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');




module.exports = app; // test