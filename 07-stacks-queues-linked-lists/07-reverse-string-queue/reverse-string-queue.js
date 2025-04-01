const Queue = require("./queue");

function reverseStringWithQueue(str) {
  const queue = new Queue();
  let reversedString = "";

  for (let i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
  }
  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
}

module.exports = reverseStringWithQueue;
