const assert  = require("assert"); // to test whether someone value is equal to another value
const ganache = require("ganache-cli");
const Web3    = require("web3"); // we are importing a constructor function, thats why it is W in Web3 and not web3, so by convention whenever we use a constructor function, we capitalize it
const provider= ganache.provider(); // we can have providers that communicate via web sockets, 
                                   // via http and also via IPC. Ganache uses IPC. 
                                   // any network that runs locally in your PC, uses inter process communication 
const web3    = new Web3(provider); // an instance of Web3. The provider is a communication layer between the blockchain network and the web3 library. The provider comes from the network itself. 
const {interface, bytecode} = require("../compile"); // 

let accounts; 
let inbox;
const INITIAL_STRING = "Hi There!";

beforeEach(async () =>{
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    //Use one of the accounts to deploy the contract. We are creating an instance of the contract, see capital C in "Contract"
    inbox = await new web3.eth.Contract (JSON.parse(interface))
        .deploy({data: bytecode, arguments: ["Hi. there"]})
        .send({from: accounts[0], gas: "1000000"})

    // ADD THIS ONE LINE RIGHT HERE!!!!! <-------
    // inbox.setProvider(provider);
});


describe("Inbox", () => {
    it("deploys a contract", () => {
        console.log(inbox);
        // assert.ok(inbox.options.address);
    } );    
    // it("it has a default message", async ()=> {
    //     const message = await inbox.methods.message().call();
    //     assert.equal(message, INITIAL_STRING)
    // });
    // it("can change the message", async () => {
    //     await inbox.methods.setMessage("Bye").send({from: accounts[0]});
    //     const message = await inbox.methods.message().call();
    //     assert.equal(message, "Bye");

    // });
});
