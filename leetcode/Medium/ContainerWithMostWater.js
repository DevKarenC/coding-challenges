/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

https://leetcode.com/problems/container-with-most-water/
*/

// Approach #1 (brute force): Time - O(n^2), Space - O(1)
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // area = height * width
      let tempArea = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, tempArea);
    }
  }
  return max;
};

// Approach #2 (optimized with 2 pointers): Time - O(n), Space - O(1)
var maxArea = function (height) {
  let max = 0;
  // initialize 2 pointers at extreme ends
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // calculate the current area (height * width)
    let currentArea = Math.min(height[left], height[right]) * (right - left);
    // update the max area
    max = Math.max(max, currentArea);
    // update the left and right pointers
    // we should update the pointer with smaller height since that will increase the chance of getting a bigger area
    if (height[left] <= height[right]) left++;
    else right--;
  }
  return max;
};
