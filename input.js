let connection;
const {INPUT_MAP} = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') process.exit();
  else {
    connection.write(INPUT_MAP[key]);
  }
};

module.exports = {setupInput};