class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
}

const ht = new HashTable();
ht.set('abc', 1);
console.log(ht.get('abc'));
