function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }
  const allPermutations = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    const remainingPermutations = permutations(remainingChars);
    for (let perm of remainingPermutations) {
      allPermutations.push(currentChar + perm);
    }
  }

  return allPermutations;
}

module.exports = permutations;
