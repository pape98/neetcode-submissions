class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    createHashTable(s){
        const hash = {};
        for(const c of s){
            if(hash[c] == undefined) hash[c] = 1;
            else hash[c] += 1;
        }
        return hash;
    }

    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        const sTable = this.createHashTable(s);
        const tTable = this.createHashTable(t);

        for(const p in sTable){
            if(sTable[p] != tTable[p]) return false;
        }

        return true;
    }
}
