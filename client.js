var conf;
var fs = require("fs");
try {
  conf = JSON.parse(fs.readFileSync("conf.json", "utf8"));
} catch(e) {
  console.error("error loading config,\nwill attempt to connect to localhost.\nSimulating wake");
  conf = {};
  conf.server = "http://localhost:8080";
}
var socket = require("socket.io-client")(conf.server);
var wol = require("wake_on_lan");

socket.on("wake", function() {
  if(conf.mac) {
    wol.wake(conf.mac, function(err) {
      if(err)
        console.log(err);
      else {
        console.log("success?")
      }
    })
  } else {
    console.log("this would probably cause my client to wake");
  }
});