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
     * @param {number} k
     * @return {ListNode}
     */
    reverseSegment(head,stop) {
        let prev = stop;
        let curr = head;
        while(curr != stop){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head)
        let groupPrev = dummy;

        while(true){
            let kth = groupPrev;
            for(let i = 0; i < k && kth; i++) kth = kth.next;
            if(!kth) break;

            const groupNext = kth.next;
            const groupStart = groupPrev.next;

            groupPrev.next = this.reverseSegment(groupStart,groupNext)
            groupStart.next = groupNext;
            groupPrev = groupStart
        }

        return dummy.next
    }
}
