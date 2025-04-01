function wordFrequencyCounter(str) {
  const cleanedStr = str.replace(/[^\w\s]/g, "").toLowerCase();
  const words = cleanedStr.split(/\s+/);
  const wordFrequency = new Map();
  words.forEach((word) => {
    if (word) {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    }
  });

  return wordFrequency;
}

const text = "Hello, world! Hello, how are you, world?";
const result = wordFrequencyCounter(text);
console.log(result);

module.exports = wordFrequencyCounter;
