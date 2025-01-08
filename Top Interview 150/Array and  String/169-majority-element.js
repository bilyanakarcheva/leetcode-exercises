/**
 * 
 * Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109 

Follow-up: Could you solve the problem in linear time and in O(1) space? // how? - Boyer-Moore Voting Algorithm
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityCount = nums.length / 2;
    let maxCountElement = 0;
    let elementsCounts = {}; // change this to something more efficient - object

    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        elementsCounts[element] = (elementsCounts[element] || 0) + 1; 
    }

    for (let element in elementsCounts) {
        if (elementsCounts[element] > majorityCount) {
            maxCountElement = Number(element);
        }
    }

    return maxCountElement;
};

console.log(majorityElement([2,2,1,1,1,2,2]));

// Follow-up: Could you solve the problem in linear time and in O(1) space? 
// Boyer-Moore Voting Algorithm
// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
// https://www.youtube.com/watch?v=n5QY3x_GNDg
// https://www.youtube.com/watch?v=3b1j1YJr5jI
// https://www.youtube.com/watch?v=9CEh3z2vUjU
// https://www.youtube.com/watch?v=4Xyhb72LCX4
// https://www.youtube.com/watch?v=1j8EzgqxLQk

var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        count += (nums[i] === candidate) ? 1 : -1;
    }

    return candidate;
};

console.log(majorityElement([2,2,1,1,1,2,2]));