class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dequeue = [];
        const output = [];
        let l = 0,
            r = 0;
        const n = nums.length;
        while (r < n) {
            while (dequeue.length && nums[dequeue[dequeue.length - 1]] < nums[r]) {
                dequeue.pop();
            }
            dequeue.push(r);

            if(l > dequeue[0]){
                dequeue.shift()
            }

            if(r+1 >= k){
                output.push(nums[dequeue[0]])
                l++
            }
            r++
        }
        return output
    }
}
