function findFirstNonRepeatingCharacter(str) {
              const charCount = {};
              for (let char of str) {
                charCount[char] = (charCount[char] || 0) + 1;
              }
              for (let char of str) {
                if (charCount[char] === 1) {
                  return char;
                }
              }
              return null;
            }

module.exports = findFirstNonRepeatingCharacter;
