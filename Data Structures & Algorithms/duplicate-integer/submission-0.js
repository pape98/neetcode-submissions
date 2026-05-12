class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    set = new Set();

    hasDuplicate(nums) {

        for(let i = 0; i < nums.length; ++i){
            if(this.set.has(nums[i])) return true; 
            this.set.add(nums[i]);
        }

        return false;
    }
}
