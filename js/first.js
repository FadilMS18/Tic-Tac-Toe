console.log("Hello, World!")



const gameBoard= {
    row1:["X", "X", "O"],
    row2:["X", "O", "O"],
    row3:["O", "X", "O"],
}

gameBoard.row1[2] = "X"


console.log(gameBoard)


console.log(Boolean(gameBoard.row1[0] === gameBoard.row2[0] && gameBoard.row3[0]))

function checkRow(board){
    let row1 = board.row1
    let row2 = board.row2
    let row3 = board.row3

    if(row1[0] === row1[1] && row1[1] === row1[2] ){
        console.log("row 1 true")
        return true
    
    }
    else if(row2[0] === row2[1] && row2[1] === row2[2]) {
        console.log("row 2 true")
        return true
    
    }
    else if(row3[0] === row3[1] && row3[1] === row3[2]){
        console.log("row 3 true")
        return true
        
    }else return false
}

function checkCol(board){
    let col1 = [board.row1[0], board.row2[0], board.row3[0]]
    let col2 = [board.row1[1], board.row2[1], board.row3[1]]
    let col3 = [board.row1[2], board.row2[2], board.row3[2]]

    // for(let i = 0; i < 3 ;i++){
    //     if(col1[0] === col1[1] && col1[1] === col1[2] ){
    //         console.log("col 1 true")
    //         break
    //     }
    //     else if(col2[0] === col2[1] && col2[1] === col2[2]) {
    //         console.log("col 2 true")
    //         break
    //     }
    //     else if(col3[0] === col3[1] && col3[1] === col3[2]){
    //         console.log("col 3 true")
    //         break
    //     }
    // }

    if(col1[0] === col1[1] && col1[1] === col1[2] ){
        console.log("col 1 true")
        return true
    }
    else if(col2[0] === col2[1] && col2[1] === col2[2]) {
        console.log("col 2 true")
        return true
    }
    else if(col3[0] === col3[1] && col3[1] === col3[2]){
        console.log("col 3 true")
        return true
    }else return false
}

function checkSlice(board){
    let slice1 = [gameBoard.row1[0], gameBoard.row2[1], gameBoard.row3[2]]
    let slice2 = [gameBoard.row1[2], gameBoard.row2[1], gameBoard.row3[0]]

    if(slice1[0] === slice1[1] && slice1[1] === slice1[2] ){
        console.log("slice 1 true")
        return true
    }
    else if(slice2[0] === slice2[1] && slice2[1] === slice2[2]) {
        console.log("slice 2 true")
        return true
    }else return false
}

function checkWinning(board){
    if(checkRow(board)){
        console.log("Row")
        return
    }
    else if(checkCol(board)){
        console.log("Col")
        return
    }
    else if(checkSlice(board)){
        console.log("Slice")
        return
    }else{
        console.log("Its a draw")

    }
}

checkWinning(gameBoard)


console.log(gameBoard)