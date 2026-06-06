class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const left = Array(nums.length+2).fill(1);
        const right = Array(nums.length+2).fill(1);
        const res = Array(nums.length+2).fill(1);

        for(let i = 0; i < nums.length; ++i){
            left[i+1] = left[i] * nums[i];
        }

        for(let j = nums.length; j >= 1; --j){
            right[j] = nums[j-1] * right[j+1];
        }

        for(let k = 1; k < res.length-1; ++k){
            res[k] = left[k-1] * right[k+1]
        }
        
        return res.slice(1,res.length-1);
    }
}
