class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i]
            console.log(diff)
            if(hashMap.get(diff) >= 0) return [hashMap.get(diff),i]
            hashMap.set(nums[i], i)
            console.log(hashMap)
        }
        return []
    }
}
