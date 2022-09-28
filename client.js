const net = require("net");
const {IP, port} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port:  port
  });
  //sets the type of encoding
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("You have successully connected to the game server");
  });

  return conn;
};

module.exports = {connect, net};