function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longestSequence = Math.max(longestSequence, currentStreak);
    }
  }

  return longestSequence;
}

module.exports = longestConsecutiveSequence;
