class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const countS = {};
        let l = 0,
            maxLength = 0;
        for (let r = 0; r < s.length; r++) {
            if(s[r] in countS){
                l = Math.max(l,countS[s[r]]+1);
            }
            countS[s[r]] = r;
            maxLength = Math.max(maxLength, r-l+1)
        }
        return maxLength
    }
}
