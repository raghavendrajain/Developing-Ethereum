const assert  = require("assert"); // to test whether someone value is equal to another value
const ganache = require("ganache-cli");
const Web3    = require("web3"); // we are importing a constructor function, thats why it is W in Web3 and not web3, so by convention whenever we use a constructor function, we capitalize it
const provider= ganache.provider();
const web3    = new Web3(provider); // an instance of Web3. The provider is a communication layer between the blockchain network and the web3 library. The provider comes from the network itself. 
const {interface, bytecode} = require("../compile");

