const gameBoard = (function(){
    let divS = Array.from(document.querySelectorAll("main > div"))
    const resetButton = document.querySelector("footer > :last-child") 
    let playerScore = 0
    let computerScore = 0

    const closeDialog = document.querySelector("dialog > button")
    closeDialog.addEventListener("click", ()=>{
        resetGame()
        dialog.close()
    })

    divS.forEach((div)=>{
        div.addEventListener("click", (e)=>{
            if(div.innerHTML !== ""){
                e.preventDefault()
            }
            else if(isDraw() || checkWin()){
                e.preventDefault()
            }
            else{
                let data = parseInt(div.getAttribute("data"))
                let where = dataToRowCol(data)
                makeMove(where.row, where.col)
                div.innerHTML = currentPlayer 
                console.table(board)
            }
        })
    }) 


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
            alert(`${currentPlayer} win`)
            addScore()
            dialog.showModal()
        }
        else if(isDraw()){
            alert("Game Draw")
        }
        else{
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
            computerMove()
        }
    }

    function checkWin(){

        for(let i = 0; i < 3; i++){
            if((board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer)||
               (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer)){
                return true
                // Checking row / col
            }
            else if((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer)||
                   (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)){
                    return true
                    // Checking diagonal
            }
        }
        return false
    }

    function isDraw(){
        let draw = board.every(row => row.every(col => col !== "")) 
        return draw
    }   

    resetButton.addEventListener("click", ()=>{
        playerScore = 0
        computerScore = 0
        document.querySelector("main > span:first-child > span").textContent = playerScore
        document.querySelector("main > span:last-child > span").textContent = computerScore
        resetGame()
    })

    function resetGame(){
        for(let i = 0; i< 3; i++){
            for(let j = 0; j < 3; j++){
                board[i][j] = ""
            }
        }
        divS.forEach((div)=>{
            div.innerHTML = ""
        })

        alert("game reset")
    }

    const getBoard = ()=> board

    function computerMove(){
        if(currentPlayer === players[1]){
            let emptyCell = []
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(board[i][j] === ""){
                        emptyCell.push({row : i, col : j})
                    }
                } 
            }  
        
            if(emptyCell.length > 0){
                let index =  Math.floor(Math.random() * emptyCell.length)
                let fix = {row : emptyCell[index].row, col: emptyCell[index].col}
                let data = rowColToData(fix.row, fix.col)

                document.querySelector(`main > div[data="${data}"]`).innerHTML = currentPlayer
                makeMove(fix.row, fix.col)
            }
        }
        currentPlayer = players[0]
        // Board.makeMove(randomRow, randomCol) that is empty
    }  

    function dataToRowCol(dat){
        let data = dat
        let row = 0
        let col = 0
        switch (data) {
            case 1:
                row = 0;
                col = 1
                break; 
            case 2:
                row = 0
                col = 2
                break;
            case 3:
                row = 1
                col = 0 
                break;
            case 4:
                row = 1
                col = 1
                break;
            case 5:
                row = 1
                col = 2
                break;
            case 6:
                row = 2
                col = 0
                break;
            case 7:
                row = 2
                col = 1
                break;
            case 8:
                row = 2
                col = 2
                break;
        }
        let obj = {row, col}
        return obj
    }
    function rowColToData(row, col){
        let data ;
        
        if (row === 0 && col === 0) {
            data = 0;
        } else if (row === 0 && col === 1) {
            data = 1;
        } else if (row === 0 && col === 2) {
            data = 2;
        } else if (row === 1 && col === 0) {
            data = 3;
        } else if (row === 1 && col === 1) {
            data = 4;
        } else if (row === 1 && col === 2) {
            data = 5;
        } else if (row === 2 && col === 0) {
            data = 6;
        } else if (row === 2 && col === 1) {
            data = 7;
        } else if (row === 2 && col === 2) {
            data = 8;
        }
        return data
    }

    function addScore(){
        currentPlayer === players[0] ? playerScore++ : computerScore++
        document.querySelector("main > span:first-child > span").textContent = playerScore
        document.querySelector("main > span:last-child > span").textContent = computerScore
    }

    console.log("Use gameBoard.getBoard() to get the board")
    console.log("Use gameBoard.resetGame() to reset the game")
   

    
    return{
        getBoard,resetGame,   
    }
})()

// let board = gameBoard
  
// console.table(board.getBoard())



// let where = dataToRowCol(0)
// console.log(where)
