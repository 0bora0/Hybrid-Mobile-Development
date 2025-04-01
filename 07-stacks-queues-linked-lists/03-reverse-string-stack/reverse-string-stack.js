const Stack = require("./stack");

function reverseStringStack(str) {
  const stack = new Stack();
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}
console.log(reverseStringStack("hello"));
console.log(reverseStringStack("world"));

module.exports = reverseStringStack;
