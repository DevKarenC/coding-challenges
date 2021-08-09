/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

https://leetcode.com/problems/valid-parentheses/
*/

// Solution with comments
var isValid = function (s) {
  // edge case: if s is empty, return false (judging the "valid string" criteria)
  if (s.length === 0) return false;
  // use a stack since the ORDER of brackets matter here - it's easy to pop off the last element and compare with efficient access time
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    // if I encounter any open brackets, push into the stack
    if (bracket in map) stack.push(bracket);
    // if I encounter any closing brackets, pop off the last element from the stack and compare to see if they are matching counterparts
    else if (bracket === ')' || bracket === ']' || bracket === '}') {
      const openBracket = stack.pop();
      // if the brackets do not match, return false
      if (map[openBracket] !== bracket) return false;
    }
  }
  // at the end of the loop, if the stack is not empty, we know the input string is NOT valid, so return false
  // but if it's empty, return true
  return stack.length === 0;
};
