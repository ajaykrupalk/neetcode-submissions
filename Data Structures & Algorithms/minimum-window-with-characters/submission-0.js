class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l = 0,
            best = "",
            have = 0;
        const need = new Map();
        const window = new Map();
        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }
        const required = need.size;
        for (let r = 0; r < s.length; r++) {
            const char = s[r];
            window.set(char, (window.get(char) || 0) + 1);

            if (need.has(char) && window.get(char) === need.get(char)) have++;

            while(have === required){
                const len = r - l +1
                if(!best || len < best.length) best = s.slice(l,r+1)

                const lc = s[l]
                window.set(lc,window.get(lc)-1)
                if(need.has(lc) && window.get(lc) < need.get(lc)) have--;
                l++
            }
        }
        return best
    }
}
