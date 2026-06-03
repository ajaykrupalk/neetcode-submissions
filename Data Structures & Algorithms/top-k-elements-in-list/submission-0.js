class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map();
        for (const num of nums) {
            hashMap.set(num, (hashMap.get(num) || 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of hashMap.entries()) {
            buckets[count].push(num);
        }

        const output = [];
        for (let i = buckets.length-1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                output.push(...buckets[i]);
                if (output.length >= k) {
                    return output.slice(0, k);
                }
            }
        }
        return output;
    }
}
