function areAllCharactersUnique(str) {
  const uniqueChars = new Set(str);
  return uniqueChars.size === str.length;
}

module.exports = areAllCharactersUnique;
