/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

// Approach #1 (Kadane's Algorithm): Time - O(n), Space - O(1)
var maxProfit = function (prices) {
  // initialize 2 variables for keeping track of maxProfit and minPrice values
  let minPrice = Infinity;
  let maxProfit = 0;
  // iterate through the prices
  for (let i = 0; i < prices.length; i++) {
    // if the current stock price is less than the minPrice, update minPrice
    if (prices[i] < minPrice) minPrice = prices[i];
    // if the current profit is greater than maxProfit, update maxProfit
    else maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};
