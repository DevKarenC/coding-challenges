/*
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

https://leetcode.com/problems/group-anagrams/
*/

// Approach #1: Time - O(n * k log k), Space - O(n * k)
// Time: n being the number of strings in strs, and k being the longest string to be sorted
// Space: the return array contains all the strings (n), and the longest string has k number of characters
var groupAnagrams = function (strs) {
  const sortedWords = {};

  // exit early: if strs is empty or 1 string, return strs in an array
  if (!strs.length || strs.length === 1) return [strs];
  // iterate through the strs and store each word in hash table
  // key being the original word
  // value being the sorted string
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let sortedKey = word.split('').sort().join('');
    // if the sorted key is the same for different words, that means they are anagrams!
    // if the sorted word doesn't exist in the hash table, push it
    // if it does exist, then push to the existing array
    if (sortedKey in sortedWords) sortedWords[sortedKey].push(word);
    else sortedWords[sortedKey] = [word];
  }

  return Object.values(sortedWords);
};
