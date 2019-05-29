const path = require("path"); //cross platform compatibility is provided by the this module for paths
const fs = require("fs"); // 
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

// to see the ouput of the compiled contract, uncomment the line below
// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1)[":Inbox"]; // to make it available to other files

