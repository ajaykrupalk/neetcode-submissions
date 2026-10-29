class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const n1 = s1.length;
        const n2 = s2.length;

        const countS1 = new Array(26).fill(0)
        const countS2 = new Array(26).fill(0)

        for(let i = 0; i < s1.length; i++){
            countS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
            countS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        if(countS1.every((val,index) => val === countS2[index])) return true

        for(let i = n1; i < s2.length; i++){
            countS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            countS2[s2.charCodeAt(i-n1) - 'a'.charCodeAt(0)]--;

            if(countS1.every((val,index) => val === countS2[index])) return true
        }

        return false
    }
}
