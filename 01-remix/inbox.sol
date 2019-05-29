pragma solidity ^0.4.25;

contract Inbox {
    
    // it is a storage variable. that exists for the life of the variable. It will only contain a string. "public" is about the accessibility.
    // The value of message will be stored for all the eternity on the blockchain.
    string public message;  
                          
    // it is automatically called when we deploy contract on the blockchain
    constructor(string initialmessage) public { 
        message = initialmessage;
    }
    
    // attempting to change the contract
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    // Functional name, Function Type declaration, Return types. 
    // public means the function is accessible by everyone on the network. It has nothing to do with security though.
    // we can also make a helper function and use "private"
    // "view" means it is not modifying any of the data in this function
    // "returns" is only used when the contract is not being modified. We can not return data from the function that is modifying our contract
    function getMessage() public view returns (string){
        return message;
    }
    
}