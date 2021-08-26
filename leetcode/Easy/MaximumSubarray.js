/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

https://leetcode.com/problems/maximum-subarray/
*/

var maxSubArray = function (nums) {
  // initialize currentMaxSum and maxSum variables to be the first value in the array
  let currentMaxSum = nums[0];
  let maxSum = nums[0];
  // iterate through the nums array, starting from the second element
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // add the num to currentMaxSum only if adding num to it would make it greater than before
    // otherwise, reset the currentMaxSum to be the current num
    currentMaxSum = Math.max(num, currentMaxSum + num);
    // if currentMaxSum is greater than maxSum, update maxSum
    maxSum = Math.max(currentMaxSum, maxSum);
  }
  return maxSum;
};
