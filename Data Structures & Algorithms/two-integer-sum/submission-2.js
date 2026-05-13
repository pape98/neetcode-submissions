class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; ++i){
            const need = target - nums[i];
            if(map.has(need)){
                // guaranteed need's index is smaller 
                // because we've seen it already
                return [map.get(need), i];
            }

            map.set(nums[i],i);
        }
    }
}
