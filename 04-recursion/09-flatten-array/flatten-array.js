function flattenArray(arr) {
  if (arr.length === 0) {
    return [];
  }
  const [first, ...rest] = arr;

  if (Array.isArray(first)) {
    return flattenArray(first).concat(flattenArray(rest));
  } else {
    return [first].concat(flattenArray(rest));
  }
}

module.exports = flattenArray;
