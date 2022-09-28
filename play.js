//IP: 165.227.47.243 PORT: 50541

const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port:  50541
  });
  //sets the type of encoding
  conn.setEncoding("utf8");
  return conn;
};

const conn = connect();

conn.on("data", (data) => {
  console.log(data);
})