function reverseString(str) {
  if (str === "") {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}

module.exports = reverseString;
