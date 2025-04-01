function anagramGrouping(words) {
  const map = new Map();
  words.forEach((word) => {
    const sortedWord = word.split("").sort().join("");
    if (map.has(sortedWord)) {
      map.get(sortedWord).push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  });
  return Array.from(map.values());
}

module.exports = anagramGrouping;
