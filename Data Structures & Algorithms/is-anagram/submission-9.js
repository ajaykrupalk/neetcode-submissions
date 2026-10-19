class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const countS = {}
        for(const char of s){
            countS[char] = (countS[char] || 0)+1
        }
        for(const char of t){
            if(countS[char] && countS[char] > 0){
                countS[char]--
            } else {
                return false
            }
        }
        return Object.values(countS).some(char => char > 0) ? false : true
    }
}
