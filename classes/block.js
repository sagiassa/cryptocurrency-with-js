module.exports = class Block{
    constructor(previousHash, transaction, timestamp = Date.now()){
        this.previousHash = previousHash;
        this.transaction = transaction;
        this.timestamp = timestamp;
    }

    getHash(){
        const json = JSON.stringify(this);
        const hash = crypto.createHash("SHA256");
        hash.update(json).end();
        const hex = hash.digest("hex");
        return hex;
    }

    toString(){
        return JSON.stringify(this);
    }
}