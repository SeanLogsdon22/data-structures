// create a set and check for repeats
// if we come across a null next value we know its not a cycle 

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
 var hasCycle = function(head) {
    let list = new Set()
    let curr = head.next
    while (curr !== null) {
        if (list.length === 0) {
            list.add(curr)
        }
        if (list.has(curr)) {
            return true
        } else {
            list.add(curr)
        }
    }
    return false
};