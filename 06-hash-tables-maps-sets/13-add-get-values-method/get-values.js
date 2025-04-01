class HashTable {
  getValues() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (const [key, value] of this.storage[i]) {
          values.push(value);
        }
      }
    }
    return values;
  }
}

module.exports = HashTable;
