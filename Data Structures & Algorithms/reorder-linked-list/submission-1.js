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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let list2 = slow.next;
        slow.next = null;
        let prev = null;
        let current = list2;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        let list1 = head;
        list2 = prev;
        while(list2){
            let next1 = list1.next;
            let next2 = list2.next;

            list1.next = list2;
            list2.next = next1;

            list1 = next1;
            list2 = next2;
        }
    }
}
