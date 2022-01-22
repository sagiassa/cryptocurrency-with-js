const  Transaction= require('./transaction');
const Chain  = require('./chain');
module.exports = class Wallet{
    constructor(){
        const keys = crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicKeyEncoding: { type: "spki", format: "pem" },
            privateKetEncoding: { type: "pkcs8", format: "pem" },
        });
        
        this.privateKey = keys.privateKey;
        this.publicKey = keys.publicKey;
    }

    send(amount, reciverPublicKey){
        const transaction = new Transaction(
            amount, this.publicKey,
            reciverPublicKey
        );
        const shaSign = crypto.createSign("SHA256");
        shaSign.update(transaction.toString()).end();

        const signature = shaSign.sign(this.privateKey);
        Chain.instance.insertBlock(transaction, this.publicKey, signature);
    }
}