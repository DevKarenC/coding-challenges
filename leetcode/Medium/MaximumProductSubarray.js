/*
152. Maximum Product Subarray

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
It is guaranteed that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.

https://leetcode.com/problems/maximum-product-subarray/
*/

// Approach #1: Time - O(n), Space - O(1)
var maxProduct = function (nums) {
  // if all numbers were positive, the product will only increase
  // but since we can have some negative numbers, we should keep track of both max and min product since there is a chance that our min product would be the max product due to being multiplied by another negative number (ex. -2 * -4 = 8)

  // initialize product, curMax, and curMin to be the first number
  let product = nums[0];
  let curMax = nums[0];
  let curMin = nums[0];
  // edge case: if nums only has 1 number, return that number
  if (nums.length === 1) return curMax;
  // iterate through nums
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // store curMax as temp since we update the curMax before we update curMin
    let temp = curMax;
    // update curMax and curMin
    // when we encounter a new number, there are 3 different scenarios for the new maximum:
    // 1. number(+ or -) itself is the new max
    // 2. number(+) * curMax(+) is the new max (pos * pos = pos)
    // 3. number(-) * curMin(-) is the new max (neg * neg = pos)
    curMax = Math.max(num, num * curMax, num * curMin);
    curMin = Math.min(num, num * temp, num * curMin);
    // update product based on the previous max (i.e. product), curMax, and curMin
    product = Math.max(product, curMax, curMin);
  }
  return product;
};

/* examples walkthrough
[2,3,-2,4]
product = 2, curMax = 2, curMin = 2
i = 1:
  num = 3, temp = 2
  curMax = max of [3, 3 * 2, 3 * 2] => 6
  curMin = min of [3, 3 * 2, 3 * 2] => 6
  product = max of [2, 6, 6] => 6
i = 2:
  num = -2, temp = 6
  curMax = max of [-2, -2 * 6, -2 * 6] => -2
  curMin = min of [-2, -2 * 6, -2 * 6] => -12
  product = max of [6, -2, -12] => 6
i = 3:
  num = 4, temp = -2
  curMax = max of [3, 3 * -2, 3 * -12] => 3
  curMin = min of [3, 3 * -2, 3 * -12] => -36
  product = max of [6, 3, -36] => 6
return 6

[-2,0,-1,-5]
product = -2, curMax = -2, curMin = -2
i = 1:
  num = 0, temp = -2
  curMax = max of [0, 0 * -2, 0 * -2] => 0
  curMin = min of [0, 0 * -2, 0 * -2] => 0
  product = max of [-2, 0, 0] => 0
i = 2:
  num = -1, temp = 0
  curMax = max of [-1, -1 * 0, -1 * 0] => 0
  curMin = min of [-1, -1 * 0, -1 * 0] => -1
  product = max of [-1, 0, 0] => 0
i = 3:
  num = -5, temp = 0
  curMax = max of [-5, -5 * 0, -5 * 0] => 0
  curMin = min of [-5, -5 * 0, -5 * -1] => 5 // where the min can turn into the max!
  product = max of [-5, 0, 5] => 5
return 5
*/
