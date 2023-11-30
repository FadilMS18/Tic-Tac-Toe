console.log("Hello, World")
const game = (function (){
    const cols = 3
    const rows = 3 
    const board = []

    // Make the 2D array
    for(let i = 0; i < rows; i++){
        board[i] = []
        for(let j = 0; j < cols; j++){
            board[i].push("")
        }
    }
    console.log(board)

    const getBoard= ()=> board

    const checkWinning = ()=>{
        board.forEach((row) =>{
            row.l
        })    
    }

    return{
        getBoard,checkWinning,
    }
})

// console.log(game.checkWinning())

const board = []

    // Make the 2D array
for(let i = 0; i < 3; i++){
    board[i] = []
    for(let j = 0; j < 3; j++){
        board[i].push("")
    }
}





function play(row, col, marker){
    board[row][col] = marker 

    console.table(board)
    if(checkRow(board)){
        alert("win by row")
    }else if(checkCol(board)){
        alert("win by Column")
    }else if(checkDiagonal(board)){
        alert("win by Diagonal")
    }


}

play(0, 0, "O")


play(1, 1, "O")
play(2, 2, "O")

console.table(board)


function checkCol(board){
    let col = false
    for(let i = 0; i < 3; i++){
        
        for(let j = 0; j< 3; j++){
            if(board[i][j] === '') continue;
            // Check col win
            if(board[0][j] === board[1][j] && board[1][j] === board[2][j] ){
                console.log(`win di col index ${j}`)
                col = true
                break
            }
        }
        if(col){
            console.log("col")
            break
        }else{console.log("No Col"); break }
    }
    return col
}

function checkRow(board){
    let row = false
    for(let i = 0; i < 3; i++ ){
        for(let j = 0; j < 3; j++){
            if(board[i][j] === "") continue;
            
            if(board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                console.log(`win di row ${i}`)
                row = true
                break;
            }
        }
        if(row){
            console.log("Row")
            break
        }else{ console.log("No Row"); break }
    }
    return row
} 

function checkDiagonal(board){
    let diagonal = false
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[1][1] === "") continue
            if(board[0][0] === board[1][1] && board[1][1] === board[2][2]){
                
                diagonal = true
                console.log("left diagonal")
                break;
            }
            else if(board[0][2] === board[1][1] && board[1][1] === board[2][0]){
                
                diagonal = true
                console.log("Right Diagonal")
                break;
            }
        
        }
        if(diagonal){
            console.log("Diagonal")
            break
        } else {console.log("No Diagonal"); break}
    }
    return diagonal
}

function resetGame(board){
    board.forEach((row)=>{
        for(let i = 0; i < row.length; i ++){
            row[i] = ""
        }
    })
}


console.log(board)
    
let playerOne = makePlayer("Finn", "X")
let playerTwo = makePlayer("Jake", "O")
function makePlayer(name, marker){
    let userName = `@${name}`
    return{
        userName,marker
    }
}

let players = [playerOne, playerTwo]
console.log(players)
play(0, 1, players[1].marker)