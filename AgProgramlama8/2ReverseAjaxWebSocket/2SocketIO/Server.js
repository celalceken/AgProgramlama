/**
 * https://github.com/expressjs
 *
 */

//Dependencies

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

parser = new require('xml2json'),


//app.use()  gerekli olan middleware (fonksiyon) leri eklemek (aktif hale getirmek) için kullanılır
//app.use(logger('dev'));

app.use(express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){

    res.sendFile(__dirname + '/City.html');

});


server.listen(8080,function(){
    console.log("Sunucu 8080 portunu dinliyor...");
});


// creating a new websocket to keep the content updated without any AJAX request
io.on('connection', function(socket) {
    console.log("istemci bağlandı...");
    // watching the xml file
    fs.watchFile(__dirname + '/Duyurular.xml', function(curr, prev) {
        // on file change we can read the new xml
        fs.readFile(__dirname + '/Duyurular.xml', function(err, data) {
            if (err) throw err;
            // parsing the new xml data and converting them into json file
            var json = parser.toJson(data);
            // send the new data to the client
            socket.emit('notification', json);
        });
    });

});