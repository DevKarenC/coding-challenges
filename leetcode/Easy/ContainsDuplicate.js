/*
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

https://leetcode.com/problems/contains-duplicate/
*/

// Approach #1: Time - O(n), Space - O(n)
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
