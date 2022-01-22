const crypto = require('crypto')
global.crypto = crypto;

const {Wallet, Chain, Transaction, Block} = require("./classes")

const itachi = new Wallet();
const madara = new Wallet();
const oro = new Wallet()

itachi.send(50, madara.publicKey);
madara.send(23, oro.publickKey);
oro.send(5, madara.publickKey)

console.log(Chain.instance)