class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
            r = 1,
            maxPrice = 0;
        while (r < prices.length) {
            if(prices[r] < prices[l]){
                l = r
            }
            maxPrice = Math.max(maxPrice,prices[r]-prices[l])
            r += 1
        }
        return maxPrice
    }
}
