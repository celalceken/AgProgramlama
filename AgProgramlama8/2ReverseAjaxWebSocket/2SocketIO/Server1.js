var express = require('express');
var app = express();
var http = require('http');
var socket = require('socket.io');

//Server instance
var server = http.createServer(app);

//build a socket using the instance of the server
var io = socket(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/City.html');
});

server.listen(8080);

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });

});