class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let l = 0, r = m*n-1;
        while(l <= r){
            const mid = Math.floor((l+r)/2);
            const row = Math.floor(mid/n);
            const col = mid % n;
            const midElement = matrix[row][col];

            if(midElement === target) {
                return true
            } else if(midElement > target){
                r = mid-1
            } else {
                l = mid+1
            }
        }
        return false
    }
}
