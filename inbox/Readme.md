This project requires several dependencies that can be installed from the npm package manager. Simply use:

```
$ npm install
```

However, to understand things in detail it is better to start from scracth. If you choose to do so, delete `package.json`and start a new node project.

1. Generate new node project inside the directory 

```
$ npm init
```

2. Install solidity compiler used for this project using
```
$ npm install --save solc@0.4.25
```

3. To compile 

```
$ node compile.js
```

4. Install
- mocha:  libraries for writing Javascipt tests
- ganache-cli: to deploy contract on local blockchain for testing purposes
- web3: to give programmatic access to our deployed blockchain, web3 libary is our portal into the ethereum world.

```
$ npm install --save mocha ganache-cli web3@1.0.0-beta.35
```


