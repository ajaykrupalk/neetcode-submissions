class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a,b) => a - b)
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue
            if(nums[i] > 0) break;

            let l = i+1, r = nums.length-1;
            while(l < r){
                const threeSum = nums[i]+nums[l]+nums[r];
                if(threeSum === 0){
                    res.push([nums[i],nums[l],nums[r]])
                    l++;
                    r--;
                    while(l < r && nums[l] === nums[l-1]) l++
                    while(l < r && nums[r] === nums[r+1]) r--
                } else if(threeSum > 0){
                    r--;
                } else {
                    l++
                }
            }
        }
        return res
    }
}
