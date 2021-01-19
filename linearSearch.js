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

// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === val ? middle : -1;
// }

//best case is O(1) worst and average case O(log n)
// O(log n ) is very very fast

// Naive string search
// loop over longer string
// loop over shorter string
// if characters don't match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count

// this will return how many times something is in the first string
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch("lori loled", "lol");
