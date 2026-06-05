class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0,
            r = numbers.length - 1,
            sum = 0;
        while (l < r) {
            sum = numbers[l] + numbers[r];
            if (sum === target) {
                return [l+1, r+1];
            } else if (sum > target) {
                r -= 1;
            } else {
                l += 1;
            }
        }
        return [];
    }
}
