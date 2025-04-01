function validAnagrams(str1, str2) {
              if (str1.length !== str2.length) {
                return false;
              }
              const freqMap = {};
              for (let char of str1) {
                freqMap[char] = (freqMap[char] || 0) + 1;
              }
              for (let char of str2) {
                if (!freqMap[char]) {
                  return false; 
                }
                freqMap[char]--;
              }
              return Object.values(freqMap).every(count => count === 0);
            }
            

module.exports = validAnagrams;
