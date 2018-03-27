/**
 * Created by wsan on 04.04.2016.
 * Non-blocking I/O
 */

var fs = require("fs");

fs.readFile('11File.xml', function (err, data)//callback function - // Dosya okuma işleminin tamamlanması beklenmez (non-blocking)
{   console.log("Fonksiyon başlangıcı...");
    if (err) return console.error(err);
    console.log("1. Başlatilan İşlemin sonucu:\n "+ data.toString()); //Dosya okuma işlemi tamamlandığında callback fonksiyonu (bu fonksiyon) çalıştırılır.
});

console.log("2. Başlatilan İşlem");

console.log("3. Başlatilan İşlem");

console.log("4. Başlatilan İşlem");

