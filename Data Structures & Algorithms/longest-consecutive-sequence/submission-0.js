class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for (const num of set) {
            if(!set.has(num-1)){
                let count = 1;
                let nextNum = num+1;
                while(set.has(nextNum)){
                    count++;
                    nextNum++;
                }
                longest = Math.max(longest,count)
            }
        }
        return longest
    }
}
