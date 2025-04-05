function mergeSort(arr) {
              // Base case: if the array has 1 or 0 elements, it's already sorted
              if (arr.length <= 1) {
                return arr;
              }
            
              // Split the array into two halves
              const middle = Math.floor(arr.length / 2);
              const left = arr.slice(0, middle);
              const right = arr.slice(middle);
            
              // Recursively sort each half
              return merge(mergeSort(left), mergeSort(right));
            }
            
            function merge(left, right) {
              const result = [];
              let leftIndex = 0;
              let rightIndex = 0;
            
              // Merge the two sorted arrays into one sorted array
              while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                  result.push(left[leftIndex]);
                  leftIndex++;
                } else {
                  result.push(right[rightIndex]);
                  rightIndex++;
                }
              }
            
              // If there are any elements left in either array, append them to the result
              return result.concat(left.slice(leftIndex), right.slice(rightIndex));
            }

module.exports = mergeSort;
