class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0
        let l = 0, r = 1, maxProfit = 0;
        while(r < prices.length){
            if(prices[r] < prices[l]){
                l = r;
            }
            maxProfit = Math.max(maxProfit, prices[r]-prices[l])
            r+=1
        }
        return maxProfit
    }
}
