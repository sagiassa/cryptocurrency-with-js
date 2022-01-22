const  Transaction = require('./transaction')
const Block  = require('./Block')
module.exports = class Chain{
    static instance = new Chain();
    constructor(){
        this.chain = [new Block("", new Transaction(100, "temp", "temp"))];
    }

    getPriviousBlockHash(){
        return this.chain[this.chain.length -1 ].getHash();
    }

    insertBlock(transaction, senderPublicKey, sig){
        const verify = crypto.createVerify("SHA256");
        verify.update(transaction.toString());
        const isValid = verify.verify(senderPublicKey, sig);
        if(isValid){
            const block = new Block(this.getPriviousBlockHash(), transaction);
            console.log("Block added", block.toString());
            this.chain.push(block)
        }
    }
}