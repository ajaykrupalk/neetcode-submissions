class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length
        const n = matrix[0].length
        let l = 0, r = m*n-1
        while(l <= r){
            const mid = Math.floor((l+r)/2)
            const i = Math.floor(mid/n)
            const j = mid%n
            const midNum = matrix[i][j]

            if(target === midNum){
                return true
            } else if(target > midNum){
                l = mid+1
            } else {
                r = mid-1
            }
        }
        return false
    }
}
