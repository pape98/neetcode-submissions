class Solution {
    isAlphaNumeric(c) {
        return /^[a-z0-9]$/i.test(c);
    }

    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) l++;
            while (l < r && !this.isAlphaNumeric(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}