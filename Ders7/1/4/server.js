
var express = require('express');
var app = express();
var path = require('path');


app.use("/",express.static(path.join(__dirname, 'public'))); // ana klasördeki public klasörü kök dizin olarak tanımlanır
app.use("/css",express.static(path.join(__dirname, '/css')));
app.use("/js",express.static(path.join(__dirname, '/js')));
app.listen(8080);
console.log('8080 Portu dinleniyor...');



