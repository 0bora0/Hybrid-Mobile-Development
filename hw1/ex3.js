function countOccurrences(string, char) {
    let count = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] == char) {
            count++;
        } 
    }
    return count;
}

console.log(countOccurrences('hellLo world', 'l'));