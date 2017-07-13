var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use(express.static('client/build'));

io.on( "connection", function(socket) {
  socket.on("diary", (update) => {
    console.log("from server at socket on", update)
    io.sockets.emit("diary", update)
  })
})

var server = http.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
