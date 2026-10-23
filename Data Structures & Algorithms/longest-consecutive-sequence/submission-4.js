class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let i = 0;
        const set = new Set(nums);
        while(i < nums.length) {
            if(!set.has(nums[i]-1)){
                let num = nums[i]
                let length = 1;
                while(set.has(num+1)){
                    length++;
                    num++;
                }
                longest = Math.max(longest,length)
            } else {
                i++;
                continue;
            }
            i++;
        }
        return longest
    }
}
