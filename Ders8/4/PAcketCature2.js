/**
 * Created by wsan on 30.03.2015.
 */
var util = require('util');
var pcap = require('pcap');
var filter = 'tcp port '+0x50;
var session = pcap.createSession('wlan0', filter);
session.on('packet', function(packet) {
    packet = pcap.decode.packet(packet);
    console.log(packet);
    if (packet.link.ip.tcp.data) {
        util.print(packet.link.ip.tcp.data.toString());
    }
});