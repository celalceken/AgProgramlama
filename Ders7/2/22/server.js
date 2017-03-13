/*
* This project partially uses the codes given in https://github.com/guille/chat-example.git
*
*
 */


var app = require('express')();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);

// index.html dosyası istemcilere gönderiliyor...
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

httpServer.listen(8080, function(){
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
