/*
 * This project uses the codes given in http://www.gianlucaguarini.com/blog/nodejs-and-a-simple-push-notification-server/
 *
 *
 */



var app = require('http').createServer(handler),
  io = require('socket.io').listen(app),
  parser = new require('xml2json'),
  fs = require('fs');

// creating the server ( localhost:8080 )
app.listen(8080);

console.log('server listening on localhost:8080');

// load City.html page
function handler(req, res) {
  fs.readFile(__dirname + '/City.html', function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(500);
      return res.end('Error loading City.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

// creating a new websocket to keep the content updated without any AJAX request
io.sockets.on('connection', function(socket) {
  console.log(__dirname);
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