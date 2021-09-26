/*
33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

https://leetcode.com/problems/search-in-rotated-sorted-array/
*/

// Approach #1: Time - O(log n), Space - O(1)
// Important to recognize that this will involve binary search due to the required time complexity of O(log n)
var search = function (nums, target) {
  // initialize left, right, and mid pointers
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if (nums[mid] === target) return mid;
    // check if num at left is less than or equal to num at mid
    // if true, that means the left side is sorted
    if (nums[left] <= nums[mid]) {
      // check if target falls in between left and mid
      // if true, then we should focus on the left side by updating the right
      if (nums[left] <= target && target <= nums[mid]) right = mid - 1;
      // if false, then we focus on the right side by updating the left
      else left = mid + 1;
    }
    // if the right side is sorted,
    else {
      // check if the target falls in between mid and right
      if (nums[mid] <= target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
