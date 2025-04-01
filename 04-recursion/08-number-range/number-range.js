function numberRange(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  return [startNum].concat(numberRange(startNum + 1, endNum));
}

module.exports = numberRange;
