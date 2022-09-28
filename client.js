const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port:  50541
  });
  //sets the type of encoding
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("You have successully connected to the game server");
  });

  return conn;
};

module.exports = {connect, net};