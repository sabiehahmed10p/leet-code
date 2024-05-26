/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indicces = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(diff in indicces) {
            return [indicces[diff], i];
        }
        indicces[nums[i]] = i;
    }
};