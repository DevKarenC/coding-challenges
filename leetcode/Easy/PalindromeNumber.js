/*
9. Palindrome Number

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

https://leetcode.com/problems/palindrome-number/
*/

// Initial solution with comments
var isPalindrome = function (x) {
  // return false early if x is negative
  if (x < 0) return false;
  // convert x into string
  let str = x.toString();
  // declare a variable for newString
  let newStr = '';
  // loop backwards to append each character to newString
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    newStr += char;
  }
  return str === newStr;
};

// Leetcode solution (converted Java to JavaScript)
var isPalindrome = function (x) {
  // return false when:
  // x is a negative number, or
  // last digit of x is equal to 0 and x is not 0
  // if the last digit of 0, that means the first digit should be 0 to be a palindrome
  // which is impossible for numbers to begin with 0, so return false.
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let revertedNumber = 0;
  // while x is bigger than revertedNumber
  // revertedNumber gets bigger, so we only need to loop through half
  while (x > revertedNumber) {
    // increase the value of revertedNumber
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // x === revertedNumber is checking to see if first half equals second half
  // or conditional checks if number is odd, dismissing middle number
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
