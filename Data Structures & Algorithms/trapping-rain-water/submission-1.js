class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0,
            r = height.length - 1,
            leftMax = 0,
            rightMax = 0,
            total = 0;
        while (l < r) {
            if (height[l] < height[r]) {
                if (height[l] > leftMax) {
                    leftMax = height[l];
                } else {
                    total += leftMax - height[l];
                }
                l++;
            } else {
                if (height[r] > rightMax) {
                    rightMax = height[r];
                } else {
                    total += rightMax - height[r];
                }
                r--;
            }
        }
        return total;
    }
}
