var http = require("http");
var express = require("express");
var app = express();
app.use(express.static("static/"));
var server = http.createServer(app).listen(8080);
var io = require("socket.io")(server);

io.on("connection", function(socket) {
  socket.on("wake", function() {
    io.emit("wake");
  });
});
