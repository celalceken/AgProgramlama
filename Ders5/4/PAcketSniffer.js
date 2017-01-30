/**
 * Created by wsan on 30.03.2015.
 */
var pcap = require('pcap'), // npm install pcap
    tcp_tracker = new pcap.TCPTracker,
    pcap_session = pcap.createSession('wlan0'); // Change to your interface

pcap_session.on('packet', function (raw_packet) {
    var packet = pcap.decode.packet(raw_packet);
    tcp_tracker.track_packet(packet);
});

tcp_tracker.on('http response body', function(session, http, data) {
    //if (data.toString('utf8').match(/^for\s\(;;\).*"from_name":/)) {
       console.log(data+''+http);
        var msg = JSON.parse(data.toString('utf8').replace('for (;;);', ''));
        console.log('\n\nFrom: ' +  msg.ms[0].from_name + '\nTo: ' + msg.ms[0].to_name + '\nMessage: ' + msg.ms[0].msg.text);
    //}
});