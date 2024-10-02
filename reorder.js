/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;
    
    // Step 1: Find the middle of the list using the slow and fast pointer technique
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the list starting from the middle
    let prev = null, current = slow;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    // Step 3: Merge the two halves
    let firstHalf = head;
    let secondHalf = prev; // This is the head of the reversed second half
    
    while (secondHalf.next !== null) {
        let tmp1 = firstHalf.next;
        let tmp2 = secondHalf.next;
        
        firstHalf.next = secondHalf;
        secondHalf.next = tmp1;
        
        firstHalf = tmp1;
        secondHalf = tmp2;
    }
};
