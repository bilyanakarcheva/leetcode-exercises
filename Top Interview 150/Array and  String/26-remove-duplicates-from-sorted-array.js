/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueNumsMaxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueNumsMaxIndex]) {
            uniqueNumsMaxIndex++;
        }
        
        nums[uniqueNumsMaxIndex] = nums[i];
    }

    return uniqueNumsMaxIndex + 1;
};


console.log(removeDuplicates([1,1,2]));