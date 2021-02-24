var maxProfit = function(prices) {
    let count = 0;
    for (let i = 0, len = prices.length; i < len - 1; i += 1) {
        if (prices[i] < prices[i + 1]) {
            count += prices[i + 1] - prices[i];
        }
    }
    return count;
};