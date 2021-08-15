/*
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

var removeDuplicates = function (nums) {
  // use 2 pointers: 1 for "base", 1 for "scout"
  let i = 0; // i for base
  // start the scout at base + 1 index
  for (let j = 1; j < nums.length; j++) {
    // j for scout
    // compare the elements at each pointer
    // if they are different, move the base once to the right and override the value at the "new" base
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
    // if they are the same (i.e. not unique), just move the scout once to the right (already done with a for loop)
  }
  // at the end of the loop, return base + 1
  return i + 1;
};

/*
      i
0,1,2,3,4,3,4,4
              j
*/
