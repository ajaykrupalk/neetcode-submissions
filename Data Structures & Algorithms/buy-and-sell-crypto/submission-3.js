class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1, maxProfit = 0;
        while(r < prices.length){
            console.log("r value: ", r)
            if(prices[r] < prices[l]){
                l = r;
                r++;
            } else {
                maxProfit = Math.max(maxProfit, prices[r] - prices[l])
                r++;
            }
            console.log(maxProfit)
        }
        return maxProfit
    }
}
