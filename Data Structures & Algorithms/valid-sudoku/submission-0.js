class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //check for each row
        for (let r = 0; r < 9; r++) {
            const seen = new Set();
            for (let c = 0; c < 9; c++) {
                const item = board[r][c];
                if (item !== "." && seen.has(item)) {
                    return false;
                }
                seen.add(item);
            }
        }

        //check for each col
        for (let r = 0; r < 9; r++) {
            const seen = new Set();
            for (let c = 0; c < 9; c++) {
                const item = board[c][r];
                if (item !== "." && seen.has(item)) {
                    return false;
                }
                seen.add(item);
            }
        }

        //check for 3*3 sub-boxes
        const starts = [
            [0, 0],
            [0, 3],
            [0, 6],
            [3, 0],
            [3, 3],
            [3, 6],
            [6, 0],
            [6, 3],
            [6, 6],
        ];
        for (const [startRow, startCol] of starts) {
            const seen = new Set();
            for (let row = startRow; row < startRow + 3; row++) {
                for (let col = startCol; col < startCol + 3; col++) {
                    const item = board[row][col];
                    if (item !== "." && seen.has(item)) {
                        return false;
                    }
                    seen.add(item);
                }
            }
        }
        return true
    }
}
