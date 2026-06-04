class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const item = board[r][c];
                if (item === ".") continue;

                const rowKey = `r${r}:${item}`;
                const colKey = `c${c}:${item}`;
                const boxKey = `b${Math.floor(r / 3)},${Math.floor(c / 3)}:${item}`;

                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                    return false
                }

                seen.add(rowKey)
                seen.add(colKey)
                seen.add(boxKey)
            }
        }
        return true
    }
}
