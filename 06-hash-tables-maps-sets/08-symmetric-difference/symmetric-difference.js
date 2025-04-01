function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const uniqueInArr1 = [...set1].filter((item) => !set2.has(item));
  const uniqueInArr2 = [...set2].filter((item) => !set1.has(item));
  return [...uniqueInArr1, ...uniqueInArr2];
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = symmetricDifference(arr1, arr2);
console.log(result);

module.exports = symmetricDifference;
