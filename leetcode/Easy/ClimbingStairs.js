/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

https://leetcode.com/problems/climbing-stairs/
*/

// Approach #1 (Dynamic Programming Bottom Up): Time - O(n), Space - O(n)
var climbStairs = function (n) {
  // create a table to store the number of ways for n steps
  const memo = new Array(n + 1).fill(0);
  // there is only one way to climb up to 1, so insert 1
  memo[1] = 1;
  memo[2] = 2;
  // iterate through the memo table until n
  for (let i = 3; i <= n; i++) {
    // use the previous values in the table for the current value (reminds me of the fibonacci sequence)
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

// Approach #2 (Dynamic Programming Bottom Up, Space optimized): Time - O(n), Space - O(1)
var climbStairs = function (n) {
  let prev = 0;
  let cur = 1;
  let temp;

  for (let i = 1; i <= n; i++) {
    temp = prev;
    prev = cur;
    cur += temp;
  }
  return cur;
};
