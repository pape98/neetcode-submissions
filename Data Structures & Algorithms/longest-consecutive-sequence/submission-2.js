class Solution {
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;

        for (const n of nums) {
            // only start counting from the beginning of a sequence
            if (set.has(n - 1)) continue;

            let temp = 1;
            let current = n;

            while (set.has(current + 1)) {
                current++;
                temp++;
            }

            res = Math.max(res, temp);
        }

        return res;
    }
}