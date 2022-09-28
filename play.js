const {connect} = require("./client.js");
const conn = connect();

conn.on('connect', () => {
  conn.write("Name: JBK");
});

conn.on("data", (data) => {
  console.log(data);
});

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const userInput = setupInput()

const handleUserInput = function(key) {
  if (String(key) === '\u0003') {
    process.exit();
  }
};

userInput.on("data", handleUserInput);




// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)