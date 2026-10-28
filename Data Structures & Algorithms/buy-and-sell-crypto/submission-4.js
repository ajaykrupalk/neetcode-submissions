class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1, maxProfit = 0;
        while(r < prices.length){
            if(prices[r] < prices[l]){
                l = r;
            } else {
                maxProfit = Math.max(maxProfit, prices[r] - prices[l])
            }
            r++;
        }
        return maxProfit
    }
}
