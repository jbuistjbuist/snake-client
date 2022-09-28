const {connect} = require("./client.js");

const conn = connect();

conn.on("data", (data) => {
  console.log(data);
});