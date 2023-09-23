/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
      let pairCount = 0;
    let frequencyHashMap = {};

    for (var i = 0; i < nums.length; i++) {
      if (!frequencyHashMap[nums[i]]) {
           frequencyHashMap[nums[i]] = 1;
      } else if (frequencyHashMap[nums[i]]) {
            frequencyHashMap[nums[i]] = frequencyHashMap[nums[i]] + 1;
      }

      pairCount += (frequencyHashMap[nums[i]] - 1);
      console.log("Current Pair Count", pairCount);
    }
    console.log(frequencyHashMap, " Computed");

    return pairCount;
};