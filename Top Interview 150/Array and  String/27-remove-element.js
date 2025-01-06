/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let countOfVal = 0;
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    console.log(nums);
    return j;
};


const numbers = [0,1,2,2,3,0,4,2];
const value = 2;

console.log(removeElement(numbers, value));