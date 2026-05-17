class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (const n of nums) {
            if (!freq[n]) freq[n] = 0;
            freq[n] += 1;
        }

        const freqArr = Object.entries(freq).map((entry) => {
            return { value: parseInt(entry[0]), count: parseInt(entry[1])};
        });

        const queue = new MaxPriorityQueue(freq => freq.count );
        freqArr.forEach(f => queue.enqueue(f));

        const res = [];
        for(let i = 0; i < k; ++i){
            const node = queue.dequeue();
            res.push(node.value);
        }

        return res;
    }
}
