/*
7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

https://leetcode.com/problems/reverse-integer/
*/

// Initial solution with comments
var reverse = function (x) {
  // convert to string to loop through the digits
  let str = x.toString();
  let reversed = '';
  // boolean flag for minus number
  let minus = false;
  // loop all the digits in a reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    const digit = str[i];
    // if minus sign is encountered, place in the beginning of the reversed integer (or ignore for now)
    if (digit === '-') {
      minus = true;
      reversed += '';
    } else {
      reversed += digit;
    }
  }
  // if 0 is encountered (as first integer), ignore it
  if (reversed[0] === '0') {
    reversed.slice(1);
  }
  if (minus) {
    reversed = `-${reversed}`;
  }
  let reversedInt = Number(reversed);
  // if reversing x causes the value to go outside the signed 32-bit integer, return 0
  if (reversedInt >= 2 ** 31 || reversedInt <= (-2) ** 31) {
    return 0;
  }
  // return the reversed integer (convert to integer)
  return reversedInt;
};

// Leetcode solution (converted Java to JavaScript)
var reverse = function (x) {
  let rev = 0;
  // as long as x is not 0, perform the following operations:
  while (x !== 0) {
    // "pop", or obtain the last digit by dividing x by 10 and getting the remainder
    let pop = x % 10;
    // get every digit except for the last digit
    // if x is positive, round down x divided by 10
    // if x is negative, round up x divided by 10
    if (x > 0) x = Math.floor(x / 10);
    if (x < 0) x = Math.ceil(x / 10);
    // handle integer overflow constraint
    if (rev > 2 ** 31 / 10 || (rev === 2 ** 31 / 10 && pop > 7)) return 0;
    if (rev < -(2 ** 31) / 10 || (rev === -(2 ** 31) / 10 && pop < -8))
      return 0;
    // "push", or increase the value of reversed integer by multiplying by 10 (updating the digit's place)
    rev = rev * 10 + pop;
  }
  return rev;
};
