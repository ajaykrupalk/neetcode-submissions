/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;
        let ahead = dummy;
        let behind = dummy;

        for (let i = 0; i <= n; i++) {
            ahead = ahead.next;
        }

        while(ahead){
            behind = behind.next;
            ahead = ahead.next
        }

        behind.next = behind.next.next
        return dummy.next
    }
}
