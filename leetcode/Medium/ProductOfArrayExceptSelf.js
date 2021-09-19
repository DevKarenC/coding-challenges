/*
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

https://leetcode.com/problems/product-of-array-except-self/
*/

// Approach #1: Time - O(n), Space - O(n)
var productExceptSelf = function (nums) {
  // ex: to get the product of A * B * C * D without B (self),
  // we can look to its left (A) and right (C, D) side to multiply them together!
  const output = [];
  const leftArray = [];
  const rightArray = [];
  // for the leftArray, look at the left side of each number
  for (let i = 0; i < nums.length; i++) {
    // if there is nothing to the left, insert 1
    // be careful of the 0 (which is falsey)
    if (!leftArray.length) leftArray[i] = 1;
    // otherwise, multiply its left side and the number at the nums array and insert the product
    else leftArray.push(leftArray[i - 1] * nums[i - 1]);
  }
  // for the rightArray,
  for (let i = nums.length - 1; i >= 0; i--) {
    // if there is nothing to the right, insert 1
    // be careful of the 0 (which is falsey)
    if (!rightArray.length) rightArray.push(1);
    // otherwise, multiply its right side and the number at the nums array and insert the product
    else rightArray.unshift(rightArray[0] * nums[i + 1]);
  }
  // multiply them to populate the output array
  for (let i = 0; i < nums.length; i++) {
    output.push(leftArray[i] * rightArray[i]);
  }
  return output;
};
