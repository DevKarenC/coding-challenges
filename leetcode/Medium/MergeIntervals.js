/*
56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

https://leetcode.com/problems/merge-intervals/
*/

// Approach #1: Time - O(n log n), Space - O(log n) if sorted in place
var merge = function (intervals) {
  const output = [];

  // exit early: if there is only one interval, return that
  if (intervals.length === 1) return intervals;

  // sort the intervals by the start number
  intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  // iterate through the intervals
  for (const interval of intervals) {
    // check if there is anything in the output array to compare
    // if there is, check if the interval overlaps (i.e. start num in the later interval is bigger than the end num in the previous interval)
    // push the interval if none of the above applies
    if (!output.length || output[output.length - 1][1] < interval[0])
      output.push(interval);
    // if there is an overlap, update the end number in the existing interval to be the greater number between 2 intervals' end numbers
    else
      output[output.length - 1][1] = Math.max(
        interval[1],
        output[output.length - 1][1]
      );
  }
  return output;
};
