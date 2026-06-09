class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const output = []
        for(let i = 0; i < nums.length; i++) {
            if(i+k > nums.length) break;

            const maxElement = Math.max(...nums.slice(i,i+k))
            output.push(maxElement)
        }
        return output
    }
}
