const {connect} = require("./client.js");
const {setupInput} = require('./input');
const conn = connect();

conn.on('connect', () => {
  conn.write("Name: JBK");
});

conn.on("data", (data) => {
  console.log(data);
});

setupInput(conn);




// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)