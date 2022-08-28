// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// MY SOLUTION
const countUniqueValues = (arr) => {
  if (!arr.length) return 0;
  let uniqueVal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueVal]) {
      uniqueVal += 1;
      arr.splice(uniqueVal, 1, arr[i]);
    }
  }
  return uniqueVal + 1;
};

// console.log({s: countUniqueValues([1,1,1,1,1,2]),r:2})
// console.log({s: countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]),r:7})
console.log({ s: countUniqueValues([]), r: 0 });
// console.log({s: countUniqueValues([-2,-1,-1,0,1]),r:4})

// COLT SOLUTION
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   var i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
