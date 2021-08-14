/*
387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

https://leetcode.com/problems/first-unique-character-in-a-string/
*/

var firstUniqChar = function (s) {
  // create a hash table/map that keep track of all the characters (key being char and value being occurrence)
  const seen = {};
  // loop through the s
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // if the char IS in the seen hash table,
    // increment the value by 1
    if (char in seen) {
      seen[char]++;
    }
    // if the char is NOT in the seen hash table,
    // add the key-value pair to the seen
    else {
      seen[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // find the first unique char
    if (seen[char] === 1) {
      return i;
    }
  }
  return -1;
};
