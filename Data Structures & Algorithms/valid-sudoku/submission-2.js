class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const m = board.length;
        const n = board[0].length;
        //checking rows
        for(let r = 0; r < m; r++){
            const seen = new Set()
            for(let c = 0; c < n; c++){
                if(board[r][c] !== "."){
                    if(seen.has(board[r][c])){
                        return false
                    } else {
                        seen.add(board[r][c])
                    }
                }
            }
        }
        //checking cols
        for(let r = 0; r < m; r++){
            const seen = new Set()
            for(let c = 0; c < n; c++){
                if(board[c][r] !== "."){
                    if(seen.has(board[c][r])){
                        return false
                    } else {
                        seen.add(board[c][r])
                    }
                }
            }
        }
        //checking 3*3 grids
        const grid = [
            [0,0],[0,3],[0,6],
            [3,0],[3,3],[3,6],
            [6,0],[6,3],[6,6],
        ]
        for(let i = 0; i < grid.length; i++){
            const row = grid[i][0]
            const col = grid[i][1]
            const seen = new Set()
            for(let r = row; r < row+3; r++){
                for(let c = col; c < col+3; c++){
                    if(board[r][c] !== ".") {
                        if(seen.has(board[r][c])){
                            return false
                        } else {
                            seen.add(board[r][c])
                        }
                    }
                }
            }
        }
        return true
    }
}
