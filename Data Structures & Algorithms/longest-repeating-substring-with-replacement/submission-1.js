class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let l = 0, maxfreq = 0, maxLength = 0;
        for(let r = 0; r < s.length; r++){
            count.set(s[r], (count.get(s[r]) || 0) + 1)
            maxfreq = Math.max(maxfreq, count.get(s[r]))

            while(r-l+1 - maxfreq > k) {
                count.set(s[l], count.get(s[l])-1)
                l++;
            }

            maxLength = Math.max(maxLength, r-l+1)
        }

        return maxLength
    }
}
