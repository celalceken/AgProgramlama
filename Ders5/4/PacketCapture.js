var args = require("minimist")(process.argv.slice(2))
var pcap = require("pcap")

var netInterface = args._[0] || "wlan0"
var filter = args.filter

var session = pcap.createSession(netInterface, filter)

session.on("packet", function(rawPacket) {
    var packet = pcap.decode.packet(rawPacket)

    log(packet)
})

function log(packet) {
    if (packet.link) {
        var line = packet.link.shost + "\t->\t" + packet.link.dhost

        if (packet.link.ip) {
            line = "IP\t" + line + "\t" + packet.link.ip.saddr + "\t->\t" + packet.link.ip.daddr
        }
        else if (packet.link.ipv6) {
            line = "IPv6\t" + line + "\t" + packet.link.ipv6.saddr + "\t->\t" + packet.link.ipv6.daddr
        }
        else if (packet.link.arp) {
            line = "ARP\t" + line + packet.link.arp.sender_pa + "\t->\t" + packet.link.arp.target_pa
        }
        else {
            console.log(JSON.stringify(packet, null, 2))
        }

        console.log(line)

    }
}
