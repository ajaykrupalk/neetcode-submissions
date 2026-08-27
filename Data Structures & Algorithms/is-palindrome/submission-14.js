class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g,'')
        let l = 0, r = cleanString.length-1;
        while(l < r){
            if(cleanString[l] != cleanString[r]) return false;
            l += 1;
            r -= 1;
        }
        return true
    }
}
