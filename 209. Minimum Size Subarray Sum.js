/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var leftPointer = 0;
  var total = 0;
  var result = Infinity;

  for (var rightPointer = 0; rightPointer < nums.length; rightPointer++) {
    total += nums[rightPointer];
    while (total >= target) {
      result = Math.min(rightPointer - leftPointer + 1, result);
      total -= nums[leftPointer];
      leftPointer += 1;
    }
  }
  if (result === Infinity) {
    return 0;
  } else return result;
};
