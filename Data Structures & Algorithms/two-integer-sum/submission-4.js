class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}
        for(let i = 0; i < nums.length; i++){
            if(target - nums[i] in hashMap){
                return [hashMap[target - nums[i]], i]
            }
            hashMap[nums[i]] = i
        }
    }
}
