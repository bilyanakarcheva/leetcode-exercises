/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let mIndex = m - 1;
    let nIndex = n - 1;
    let resultIndex = m + n - 1

    while(nIndex >= 0) {
        if (mIndex >= 0 && nums1[mIndex] > nums2[nIndex]) {
            nums1[resultIndex] = nums1[mIndex];
            mIndex--;
        } else {
            nums1[resultIndex] = nums2[nIndex];
            nIndex--;
        }
        resultIndex--;
    }
    
};

const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;

merge(nums1,m,nums2,n);

console.log(nums1);