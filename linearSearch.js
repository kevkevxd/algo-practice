//write a function whcih accepts an array and a value and returns the index at which the
// value exists, if the value doesn't exist return -1

// function linearSearch(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) return i;
//   }
//   return -1;
// }

// console.log(linearSearch([1, 2, 3, 4], 3));

// linear time complexity best case is O(1); worst case O(n);

// Binary search
// You can eliminate half of the remaining elements at a time
// only works on sorted arrays
// create a left pointer at the start of the array, right pointer at the end
// and a middle pointer..
//  create a pointer in the middle, value too small? move left pointer up
// value too large, move the right pointer down
// never find value return -1

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
