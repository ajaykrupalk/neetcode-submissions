class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) { 
        let l = 0, r = heights.length-1, maxArea = 0;
        while(l < r){
            const w = r - l
            const h = Math.min(heights[l],heights[r])
            const a = w * h
            maxArea = Math.max(maxArea,a)
            if(heights[l] < heights[r]){
                l += 1
            } else {
                r -= 1
            }
        }
        return maxArea
    }
}
