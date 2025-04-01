function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squaredEvens = evenNumbers.map((num) => num * num);
  const sum = squaredEvens.reduce((acc, num) => acc + num, 0);

  return sum;
}

module.exports = sumOfEvenSquares;
