function isPalindrome(input) {
let reversed = input.split('').reverse().join('');
 if(input === reversed){
    return true;
 } else{
    return false;
 }
}

module.exports = isPalindrome;
