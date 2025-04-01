function findMissingLetter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].charCodeAt(0) + 1 !== arr[i + 1].charCodeAt(0)) {
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }
}

module.exports = findMissingLetter;
