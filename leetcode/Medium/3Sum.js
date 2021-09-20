/*
15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.

https://leetcode.com/problems/3sum/
*/

// Approach #1: Time - O(n^2), Space - O(1) where the output array does not count as extra space
var threeSum = function (nums) {
  const output = [];
  // exit early condition: if nums length is less than 3, return []
  if (nums.length < 3) return output;
  // sort the nums array
  nums.sort((a, b) => a - b);
  // optimizing: stop the loop at nums.length - 2 so we can look at the last 2 elements
  for (let i = 0; i < nums.length - 2; i++) {
    // initialize the target and pointers
    let target = 0;
    let left = i + 1;
    let right = nums.length - 1;
    // **if we have seen the number already, skip to the next i**
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        output.push([nums[i], nums[left], nums[right]]);
        // **check if the numbers are duplicates and skip them if they are**
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        // **necessary to place left and right at UNIQUE elements**
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }
    }
  }
  return output;
};
