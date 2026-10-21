class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = ''
        for(const str of strs){
            newStr += str.length+'#'+str
        }
        return newStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0;
        let j = 0;
        while(i < str.length){
            while(str[j] != '#'){
                j++
            }
            const length = parseInt(str.substring(i,j))
            i = j+1;
            j = i+length;
            res.push(str.substring(i,j))
            i = j;
        }
        return res
    }
}
