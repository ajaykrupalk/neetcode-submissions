class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = {}
        for(const char of s){
            freqS[char] = (freqS[char] || 0)+1
        }
        for(const char of t){
            if(freqS[char] && freqS[char] > 0){
                freqS[char] --
            } else {
                return false
            }
        }
        console.log(freqS)
        return Object.values(freqS).some(val => val > 0) ? false : true;
    }
}
