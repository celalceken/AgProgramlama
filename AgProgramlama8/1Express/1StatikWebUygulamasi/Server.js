/**
 * https://github.com/expressjs
 *
 */

//Dependencies

var express = require('express'); //Node.js web uygulama çatısı. Web uygulamaları geliştirmek için kullanılır.
var app = express();
var path = require('path');

//To serve static files(uygulama sunucusunun oluşturması gerekmeyen) such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use("/",express.static(path.join(__dirname, 'public'))); // (virtual path prefix)ana klasördeki public klasörü kök dizin olarak tanımlanır
app.use("/css",express.static(path.join(__dirname, '/css')));
app.use("/js",express.static(path.join(__dirname, '/js')));
app.listen(8080);
console.log('8080 Portu dinleniyor...');



