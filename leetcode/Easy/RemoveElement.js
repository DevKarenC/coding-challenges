/*
27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

https://leetcode.com/problems/remove-element/
*/

// Solution with comments
var removeElement = function (nums, val) {
  // edge case of empty nums array
  if (nums.length === 0) return 0;

  // initialize the "base" pointer
  let i = 0;
  // loop the nums array with a "scout" pointer
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    // if num is NOT val, replace ("removing", or overriding!) the value at index i and move i once to the right
    if (val !== num) {
      nums[i] = num;
      i++;
    }
  }
  return i;
};
