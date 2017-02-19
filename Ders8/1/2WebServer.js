var http = require('http');

http.createServer(function (req, res) {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080);

console.log('Listening port 8080');
