/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

https://leetcode.com/problems/merge-two-sorted-lists/
*/

// Solution with comments

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  // edge case: if l1 or l2 is null, return the non-null head
  if (!l1) return l2;
  else if (!l2) return l1;

  // pick a smaller head between l1 and l2
  let p1 = l1.val <= l2.val ? l1 : l2;
  let p2 = l1 === p1 ? l2 : l1;
  let p3 = p1.next;
  let newHead = p1;

  // compare the node values until we reach the end of either list
  while (p2 && p3) {
    if (p2.val <= p3.val) {
      p1.next = p2;
      p1 = p2;
      p2 = p2.next;
    } else {
      p1.next = p3; // make p1 point to p3
      p1 = p3; // proceed p1 to the next node
      p3 = p3.next; // proceed p3 to the next node
    }
  }

  // append the rest of the items
  if (!p2) p1.next = p3;
  else if (!p3) p1.next = p2;

  return newHead;
};

// recursive solution
var mergeTwoListsRecursive = function (l1, l2) {
  // base case: if either l1 or l2 is null, return the other non-null node
  if (!l1 || !l2) return l1 ? l1 : l2;
  // recursive case:
  // compare l1 and l2 values to determine which has a smaller head,
  if (l1.val <= l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    return l1;
  }
  // set the next value for that head to the next merge result
  else {
    l2.next = mergeTwoListsRecursive(l1, l2.next);
    return l2;
  }
};
