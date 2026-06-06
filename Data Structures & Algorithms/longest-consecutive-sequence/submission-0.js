class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        let max = Number.NEGATIVE_INFINITY;

        for(const n of nums){
            set.add(n);
            max = Math.max(max,n);
        }

        let res = 0;

        for(let i = 0; i < nums.length; ++i){
            // determine if beginning of a set
            if(set.has(nums[i] - 1) == true) continue;

            let temp = 1;

            for(let j = nums[i] + 1; j < max+1; ++j){
                if(set.has(j)) temp++; 
                else break;
            }    

            res = Math.max(res, temp)        
        }

        return res;
    }
}
