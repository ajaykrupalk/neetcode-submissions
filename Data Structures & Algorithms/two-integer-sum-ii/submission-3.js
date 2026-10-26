class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length-1;
        while(l < r){
            const twoSum = numbers[l]+numbers[r]
            if(twoSum === target){
                return [l+1,r+1]
            } else if(twoSum > target){
                r--;
            } else {
                l++;
            }
        }
    }
}
