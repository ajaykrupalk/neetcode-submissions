class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length === 0 ? "null" : strs.join("7*")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str === "null" ? [] : str.split("7*")
    }
}
