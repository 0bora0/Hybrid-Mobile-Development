function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

module.exports = factorial;
function countDown(n) {
  if (n <= 0) {
    console.log("All done!");
    return;
  }
  console.log(n);
  countDown(n - 1);
}

module.exports = countDown;
