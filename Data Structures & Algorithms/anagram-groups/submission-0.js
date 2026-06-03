class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map()
        for(const str of strs){
            const countWord = new Array(26).fill(0)
            for(const char of str){
                countWord[char.charCodeAt(0)-'a'.charCodeAt(0)]++
            }
            const key = countWord.join(",")
            if(!hashMap.has(key)) hashMap.set(key,[])
            hashMap.get(key).push(str)
        }
        return Array.from(hashMap.values())
    }
}
