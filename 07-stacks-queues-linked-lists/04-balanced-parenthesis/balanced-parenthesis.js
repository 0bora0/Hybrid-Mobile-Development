const Stack = require("./stack");
function balancedParenthesis(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

module.exports = balancedParenthesis;
