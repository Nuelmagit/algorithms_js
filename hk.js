function HashTable(){

    this.numBuckets = 35;

    this.values = [];

}

HashTable.prototype.get = function(key) {
    const hasKey = this.hash(key);
    return this.values[hasKey];
}

HashTable.prototype.set = function(key, val) {

    if(typeof key !== 'string'){
        throw new Error("Keys must be strings")
    }

    const hasKey = this.hash(key);
    this.values[hasKey] = val;
}

HashTable.prototype.hasKey = function(key) {
    const hasKey = this.hash(key);
    return this.values[hasKey] ? true : false;
}

HashTable.prototype.hash = function(string) {
    let number = 0;

    string.split("").forEach(letra => {
        number += letra.charCodeAt();
    });

   return Math.floor( number % this.numBuckets );
}
let table = new HashTable();