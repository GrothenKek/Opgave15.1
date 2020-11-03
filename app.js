// app.js
const express = require('express');
const app = express();
const config = require('./config');

// TODO slet 
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/rooms', require('./routes/rooms.js'));
app.use('/messages', require('./routes/message.js'));

const port = process.env.PORT || config.localport // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app; // test