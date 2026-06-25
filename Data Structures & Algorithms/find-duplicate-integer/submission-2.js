class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // for(const num of nums){
        //     let idx = Math.abs(num)-1
        //     if(nums[idx] < 0) {
        //         return Math.abs(num)
        //     }
        //     nums[idx] *= -1
        // }
        // return -1
        let slow = nums[0];
        let fast = nums[0];
        do {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while (slow !== fast)

        slow = nums[0]
        while(slow !== fast){
            slow = nums[slow]
            fast = nums[fast]
        }
        return slow
    }
}
