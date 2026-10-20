class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGroups = {}
        for(let i = 0; i < strs.length; i++){
            const charMap = new Array(26).fill(0)
            const str = strs[i]
            for(let j = 0; j < str.length; j++){
                charMap[str.charCodeAt(j) - 'a'.charCodeAt(0)]++
            }
            const key = charMap.join(",")
            if(!anagramGroups[key]) {
                anagramGroups[key] = []
            } 
            anagramGroups[key].push(str)
        }
        return Object.values(anagramGroups)
    }
}
