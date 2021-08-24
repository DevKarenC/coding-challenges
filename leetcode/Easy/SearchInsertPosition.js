/*
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

https://leetcode.com/problems/search-insert-position/
*/

// Implementing binary search
var searchInsert = function (nums, target) {
  // initialize left and right pointers
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // find the middle index
    let middle = Math.floor((left + right) / 2);
    // if target is less than middle, search on the left (make right smaller)
    if (target < nums[middle]) {
      right = middle - 1;
    }
    // if target is greater than middle, search on the right (make left bigger)
    else if (target > nums[middle]) {
      left = middle + 1;
    }
    // if target is equal to middle, return middle
    else if (target === nums[middle]) return middle;
  }
  // if target was not found, return left
  return left;
};
