/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

https://leetcode.com/problems/two-sum/
*/

// Brute force approach with comments
var twoSum = function (nums, target) {
  // brute force solution
  // nested loops for go through the nums array
  // for every iteration of i, we check to see if the sum of nums[i] and nums[j] would equal to target
  // only loop until i is less than nums.length - 1 to avoid being out of bound for j
  for (let i = 0; i < nums.length - 1; i++) {
    const first = nums[i];
    // start at i+1 because we cannot use the same element twice
    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j];
      if (first + second === target) {
        return [i, j];
      }
    }
  }
};
