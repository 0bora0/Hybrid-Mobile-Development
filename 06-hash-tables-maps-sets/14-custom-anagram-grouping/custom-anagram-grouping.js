function anagramGrouping(words) {
  const hashTable = new Map();
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (!hashTable.has(sortedWord)) {
      hashTable.set(sortedWord, []);
    }
    hashTable.get(sortedWord).push(word);
  }
  return Array.from(hashTable.values());
}

module.exports = anagramGrouping;
