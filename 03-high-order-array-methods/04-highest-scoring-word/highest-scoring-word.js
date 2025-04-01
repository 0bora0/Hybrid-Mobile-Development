function highestScoringWord(x) {
  const words = x.split(" ");

  let highestScoringWord = "";
  let highestScore = 0;
  for (const word of words) {
    const score = word
      .split("")
      .reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);
    if (score > highestScore) {
      highestScoringWord = word;
      highestScore = score;
    }
  }

  return highestScoringWord;
}

module.exports = highestScoringWord;
