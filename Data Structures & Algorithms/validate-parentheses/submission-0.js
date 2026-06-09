class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hashMap = { ")": "(", "}": "{", "]": "[" };
        const stack = []
        for (const c of s) {
            if(!hashMap[c]){
                stack.push(c)
            } else {
                if(stack.length === 0 || stack.pop() !== hashMap[c]){
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
