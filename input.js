const {movementKeys, messages} = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (String(key) === '\u0003') {
    process.exit();
  }
  if (movementKeys[key]) {
    connection.write(movementKeys[key]);
  }
  if (messages[key]) {
    connection.write(messages[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = {setupInput};