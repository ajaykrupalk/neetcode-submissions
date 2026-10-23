class Solution {
    isAlphaNum(s) {
        return (
            (s >= 'a' && s <= 'z') ||
            (s >= 'A' && s <= 'Z') ||
            (s >= '0' && s <= '9')
        )
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length-1;
        while(i < j) {
            while(!this.isAlphaNum(s[i]) && i < j) i++;
            while(!this.isAlphaNum(s[j]) && i < j) j--

            if(s[i].toLowerCase() !== s[j].toLowerCase())
                return false
            
            i++;
            j--;
        }
        return true
    }
}
