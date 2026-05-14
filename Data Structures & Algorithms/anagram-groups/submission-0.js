class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    countFrequencies(str){
        const freq = Array(26).fill(0);
        for(const char of str){
            const index = char.charCodeAt(0) - 97
            freq[index] += 1;
        }

        return freq;
    }

    groupAnagrams(strs) {
        const map = {};
        
        for(const str of strs){
            const freq = this.countFrequencies(str);
            if(!map[freq]) map[freq] = [str];
            else map[freq].push(str);
        }
        return Object.values(map);
    }
}
