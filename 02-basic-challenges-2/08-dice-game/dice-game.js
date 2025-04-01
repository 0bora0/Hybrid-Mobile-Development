function diceGameSimulation(numSimulations) {
  const results = [];
  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    let result;
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }
    results.push({
      dice1: dice1,
      dice2: dice2,
      sum: sum,
      result: result,
    });
  }

  return results;
}

module.exports = diceGameSimulation;
