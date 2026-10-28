class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, maxLength = 0;
        const count = {};
        while(r < s.length){
            count[s[r]] = (count[s[r]] || 0)+1
            while(count[s[r]] > 1){
                count[s[l]]--;
                l++;
            }
            
            maxLength = Math.max(maxLength, r-l+1)
            r++;
        }
        return maxLength
    }
}
