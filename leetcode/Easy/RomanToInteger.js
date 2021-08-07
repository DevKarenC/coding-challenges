/*
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

https://leetcode.com/problems/roman-to-integer/
*/

// Solution with comments
var romanToInt = function (s) {
  // variable to store the converted number
  let num = 0;
  // object to store symbol-value pairs
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // initialize a pointer to loop through s
  let i = 0;
  // loop through s
  while (i < s.length) {
    const char = s[i];
    const nextChar = s[i + 1];
    // if the value of index i is smaller than the value of index i + 1,
    // subtract index i + 1 value - index i value
    if (obj[char] < obj[nextChar]) {
      num = num + (obj[nextChar] - obj[char]);
      // skip to the next next index (since next index was already accounted for)
      i += 2;
    } else {
      // else, add the value to the num
      num += obj[char];
      i += 1;
    }
  }
  // return num
  return num;
};
