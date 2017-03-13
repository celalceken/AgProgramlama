/**
 * Created by wsan on 04.04.2016.
 */

var fs = require("fs");

fs.readFile('11File.xml', function (err, data)//callback function
{
    if (err) return console.error(err);
    console.log("1. Başlatilan İşlemin sonucu:\n "+ data.toString()); //callback fonksiyonu tamamlandığında burası çalıştırılır
});

console.log("2. Başlatilan İşlem");

console.log("3. Başlatilan İşlem");

console.log("4. Başlatilan İşlem");

