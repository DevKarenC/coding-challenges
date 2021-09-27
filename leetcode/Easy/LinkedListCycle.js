/*
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

https://leetcode.com/problems/linked-list-cycle/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Approach #1: Time - O(n), Space - O(n)
// Utilizing Hash Set to keep track of visited nodes
var hasCycle = function (head) {
  if (!head) return false;
  const visited = new Set();
  let cur = head;
  // loop until the end of the singly linked list
  // add new node to the set
  // if node already exists, return true
  while (cur) {
    if (visited.has(cur)) return true;
    visited.add(cur, true);
    cur = cur.next;
  }
  return false;
};

// Approach #2: Time - O(n), Space - O(1)
// Floyd's Cycle Finding Algorithm (slow and fast)
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    // if fast reaches the end and we didn't have a cycle, return false
    if (fast === null || fast.next === null) return false;
    // slow moves by 1 whereas fast moves by 2
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
