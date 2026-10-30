class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        let r = 0, l = 0;
        const q = new Deque();
        const output = []
        while(r < n){
            while(q.size() && nums[q.back()] < nums[r]) {
                q.popBack()
            }
            q.pushBack(r)

            if(l > q.front()){
                q.popFront()
            }

            if(r+1 >= k){
                output.push(nums[q.front()])
                l++
            }

            r++
        }

        return output
    }
}
