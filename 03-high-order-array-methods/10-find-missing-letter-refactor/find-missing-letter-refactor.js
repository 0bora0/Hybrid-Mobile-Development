function findMissingLetter(array) {
  const charCodes = array.map((char) => char.charCodeAt(0));
  for (let i = 0; i < charCodes.length - 1; i++) {
    if (charCodes[i] + 1 !== charCodes[i + 1]) {
      return String.fromCharCode(charCodes[i] + 1);
    }
  }
}

module.exports = findMissingLetter;
