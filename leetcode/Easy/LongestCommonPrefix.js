/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

https://leetcode.com/problems/longest-common-prefix/
*/

// Solution with comments
var longestCommonPrefix = function (strs) {
  // take the first element in the strs array to compare across all elements
  // since "common" means the prefix should exist in all elements
  const firstWord = strs[0];
  // for each character in the first word, compare with the same indexed character in each word in the strs array
  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];
    for (let j = 0; j < strs.length; j++) {
      const word = strs[j];
      // if the characters at the same index do not match,
      // it's not common, so there is no need to loop anymore
      // simply return up until the characters were common
      if (char !== word[i]) return firstWord.slice(0, i);
    }
  }
  // if it never entered the if condition, it means the entire firstWord was common across all elements, so just return the firstWord as the longest common prefix.
  return firstWord;
};
