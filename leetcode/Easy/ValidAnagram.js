/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

https://leetcode.com/problems/valid-anagram/
*/

// Approach #1 (Hash Map): Time - O(n), Space - O(1)
// Space is O(1) because the hash maps will only increase up to 26 keys (26 alphabets)
var isAnagram = function (s, t) {
  // return false early if the s and t length are different
  if (s.length !== t.length) return false;
  // store the count of char that appears in s
  const sMap = {};
  for (const char of s) {
    if (char in sMap) sMap[char]++;
    else sMap[char] = 1;
  }
  // store the count of char that appears in t
  const tMap = {};
  for (const char of t) {
    if (char in tMap) tMap[char]++;
    else tMap[char] = 1;
  }
  // iterate through one of the maps to compare if the count are the same
  for (const char in sMap) {
    if (sMap[char] !== tMap[char]) return false;
  }
  return true;
};

// Approach #2 (Sorting): Time - O(n log n), Space - O(s + t)
// For Space: s being the num of chars in the sorted string s, and t being the num of chars in the sorted string t
var isAnagram = function (s, t) {
  // return false early if the s and t length are different
  if (s.length !== t.length) return false;

  // sort the strings and compare - they must match if t is an anagram of s
  const sortedS = [...s].sort().toString();
  const sortedT = [...t].sort().toString();
  return sortedS === sortedT;
};
