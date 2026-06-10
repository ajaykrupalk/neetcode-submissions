class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const output = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while(stack.length > 0 && stack[stack.length-1][0] < t){
                const [stackT,stackI] = stack.pop()
                output[stackI] = i - stackI
            }
            stack.push([t,i])
        }
        return output
    }
}
