class Solution {
  solve(nums) {
    let start = 1;
    let currentHighest = nums[0];
    let secondHighest = 0;
    // if (nums.length == 2){
    //     return Math.max(...nums)
    // }

    while (start < nums.length) {
      if (nums[start] > currentHighest) {
        currentHighest = nums[start];
      }
      if (nums[start] > secondHighest && currentHighest >= nums[start]) {
        secondHighest = nums[start];
      }
      start++;
      console.log("secondHighest", secondHighest);
      console.log("currentHighest", currentHighest);
    }
    //     1 * 2 < 1
    return secondHighest * 2 < currentHighest;
  }
}
