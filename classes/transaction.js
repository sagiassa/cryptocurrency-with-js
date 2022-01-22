module.exports = class Transaction {
    constructor(amount, senderPublicKey, reciverPublicKey){
        this.amount = amount;
        this.senderPublicKey = senderPublicKey;
        this.reciverPublicKey = reciverPublicKey;
    }

    toString(){
        return JSON.stringify(this);
    }

}