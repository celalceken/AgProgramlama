
var express = require('express');
var http = require('http');
var app = express();
var socket = require('socket.io');
var path = require('path');
//var logger = require('morgan');  // log requests to the console
var fs=require('fs');
//Server instance
var server = http.createServer(app);
//build a socket using the instance of the server
var io=socket(server);


app.use(express.static(__dirname + '/node_modules'));

// index.html dosyası istemcilere gönderiliyor...
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(8080, function(){
    console.log('8080 Portu dinleniyor...');
});


io.on('connection', function(socket) // bağlantı kurulduğunda
{
    console.log('Bir kullanıcı bağlandı');

    socket.on('mesaj', function(msg) // kullanıcı tanımlı olay
    {
        io.emit('mesaj', msg);

    });
    socket.on('disconnect', function() //disconnect (connect, message ve kullanıcı tanımlı olaylar belirlenebiliyor) olayı gerçekleştiğinde
    {
        console.log('Kullanıcı ayrıldı...');
    });
});
