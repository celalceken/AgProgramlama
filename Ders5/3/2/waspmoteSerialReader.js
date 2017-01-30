//var SerialPort = require("serialport").SerialPort;
//var serialport = new SerialPort("/dev/tty.USB0");



var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyUSB0", {
    baudrate: 115200,
    parser: require("serialport").parsers.readline("\n")
});

var dateFormat = require('dateformat');
/*
var collection = db.get('datas');
*/


serialPort.on("open", function () {
  //  console.log("Bağlanılmaya çalışılan : "+"/dev/cu.usbserial-A6015J65");
    console.log('Var olan serial portlar : \n');
    require("serialport").list(function (err, ports) {
        count = 1;
        ports.forEach(function(port) {
            console.log(count + ") " + port.comName);
            count++;
        });
    });

    serialPort.on('data', function(data){
        //console.log(data);
        var date = new Date();
        var dataArray = data.split(':');
        console.log(dateFormat(date.getTime(), "yyyy-mm-dd HH:MM:ss")+'-->'+dataArray[0]+'::'+dataArray[1]);
    });

});