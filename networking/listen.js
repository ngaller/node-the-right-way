const net = require("net"),
  server = net.createServer(function(connection) {
    console.log("Incoming connection");
  });
server.listen(5432);

