function maxSubarraySum(arr, k) {
  if (arr.length < k) {
    return null;
  }

  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
