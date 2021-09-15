/*
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

https://leetcode.com/problems/contains-duplicate/
*/

// Approach #1 (Hash map): Time - O(n), Space - O(n)
var containsDuplicate = function (nums) {
  const appeared = {};
  // populate the appeared hash map
  for (const num of nums) {
    if (num in appeared) appeared[num]++;
    else {
      appeared[num] = 1;
    }
  }
  // iterate through the hash map to check if any value appears at least twice
  for (const num in appeared) {
    if (appeared[num] >= 2) return true;
  }
  return false;
};

// Approach #2 (Sorted array): Time - O(n log n), Space: O(1)
var containsDuplicate = function (nums) {
  // sort the nums array
  nums.sort((a, b) => a - b);
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    // if i and j are the same, return true
    if (nums[i] === nums[j]) return true;
    // move up j
    j++;
  }
  return false;
};

// Approach #3 (Set): Time - O(n), Space: O(n)
var containsDuplicate = function (nums) {
  // create a set with nums array
  // if the length is different, that means there was a duplicate so return true
  return nums.length !== new Set(nums).size ? true : false;
};
