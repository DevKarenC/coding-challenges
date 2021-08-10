/*
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

1. Starting with any positive integer, replace the number by the sum of the squares of its digits.
2. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
3. Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

https://leetcode.com/problems/happy-number/
*/

var isHappy = function (n) {
  // convert integer to be iterable
  let str = n.toString();
  // keep track of sum
  let sum = 0;
  // keep track of sum so far so that when the same sum is encountered, we know the cycle will repeat - so we know when to return false (faster access time than an array)
  const sums = {};
  while (sum !== 1) {
    for (let i = 0; i < str.length; i++) {
      // convert the character to an integer
      const digit = parseInt(str[i]);
      // add the squares of the number's digits
      sum += digit ** 2;
    }
    // if sum is 1, then it's happy - return true
    if (sum === 1) return true;
    // if we have seen the same sum before, it's not a happy number since we will repeat the process
    if (sum in sums) return false;
    // if we haven't seen the same sum, add it as key-value pair to the sums map
    else sums[sum] = true;
    // update the value of str with the new sum converted to string (iterable)
    str = sum.toString();
    // reset the sum to be 0
    sum = 0;
  }
};

// if n = 2, return false because:
// 2^2 = 4 => 16 = 1 + 36 = 37 = 9 + 49 = 58 = 25 + 64 = 89 = 64 + 81 = 145 = 1 + 16 + 25 = 42 = 16 + 4 = 20 = 4 => 16... endless cycle
