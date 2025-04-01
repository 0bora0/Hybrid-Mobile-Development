function isPalindrome(input) {
  const cleanedInput = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleanedInput.split("").reverse().join("");
  return cleanedInput === reversed;
}

module.exports = isPalindrome;
