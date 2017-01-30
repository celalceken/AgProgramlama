/**
 * Created by wsan on 04.04.2016.
 */

var fs = require("fs");

var data = fs.readFileSync('11File.xml');

console.log("1. Başlatilan İşlemin sonucu:\n "+ data.toString());
console.log("2. Başlatilan İşlem");
console.log("3. Başlatilan İşlem");
console.log("4. Başlatilan İşlem");

