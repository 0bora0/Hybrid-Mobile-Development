function isPalindrome(input) {
 let length = input.length
 let reversed = input.split(',').reverse().join('')
 if(length%2!==0){
    return false;
 } else if(input === reversed){
    return true;
 } else{
    return false;
 }
}

module.exports = isPalindrome;
