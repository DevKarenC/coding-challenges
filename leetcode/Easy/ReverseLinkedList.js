/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

https://leetcode.com/problems/reverse-linked-list/
*/

// Solution with comments

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  // initialize three pointers to manipulate
  let prevNode = null;
  let curNode = head;
  let nextNode = null;

  // loop through the linked list until curNode is null
  while (curNode) {
    nextNode = curNode.next; // proceed the nextNode
    curNode.next = prevNode; // reverse the pointer
    prevNode = curNode; // proceed the prevNode
    curNode = nextNode; // proceed the curNode
  }

  return prevNode;
};
