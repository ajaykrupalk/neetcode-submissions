class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length;
        const n2 = s2.length;

        if (n1 > n2) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < n1; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        if (s1Count.every((val, index) => val === s2Count[index])) return true;

        for (let i = n1; i < n2; i++) {
            s2Count[s2.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i - n1) - 97]--;
            if (s1Count.every((val, index) => val === s2Count[index])) return true;
        }

        return false;
    }
}
