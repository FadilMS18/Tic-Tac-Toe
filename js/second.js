function gameBoard(){
    let board =[]
    for(let i = 0; i< 3; i++){
        board[i] = []
        for(let j = 0; j < 3; j++){
            board[i][j] = ""
        }
    }


    let players = ["X", "O"]
    let currentPlayer  = players[0]

    function makeMove(row, col){
        board[row][col] = currentPlayer

        if(checkWin()){
            console.log(`${currentPlayer} win`)
            resetGame()
        }
        else if(isDraw()){
            console.log("Game Draw")
            resetGame()
        }
        else{
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
        }
    }

    function checkWin(){
        for(let i = 0; i < 3; i++){
            if((board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer)||
               (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer)){
                return true
                break
                // Checking row / col
            }
            else if((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer)||
                   (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)){
                    return true
                    break
                    // Checking diagonal
            }
        }
        return false
    }

    function isDraw(){
        if(checkWin()) return

        let draw = board.every(row => row.every(col => col !== "")) 
        return draw
    }   

    function resetGame(){
        for(let i = 0; i< 3; i++){
            for(let j = 0; j < 3; j++){
                board[i][j] = ""
            }
        }
        console.log("game reset")
    }

    const getBoard = ()=> board

    return{
        getBoard,makeMove,        
    }
}

let board = gameBoard()


// board.makeMove(0, 2)  
// board.makeMove(1, 1)
board.makeMove(2, 0)
// board.makeMove(0, 0)
// board.makeMove(0, 1)
board.makeMove(2, 2)

console.table(board.getBoard())

let bor = board.getBoard()


let mew = bor.indexOf(row=> row.includes(""))
console.log(mew)

