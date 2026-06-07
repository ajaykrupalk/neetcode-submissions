class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const countS = {};
        let left = 0,
            maxLength = 0,
            maxFreq = 0;
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            countS[char] = (countS[char] || 0) + 1;
            maxFreq = Math.max(maxFreq, countS[char]);
            if ((right - left + 1) - maxFreq > k) {
                countS[s[left]]--;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
