let button = document.getElementById("reestartGame")

document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
})

function handleClick (event) {
    let square = event.target
    let position = square.id
    if (handleMove(position)) {

        setTimeout(() => {
            
            if (playerTime == 1) {
                playerTime = "o X ganhou"
                Phase = playerTime
            } else {
                playerTime = "a bolinha ganhou"
                Phase = playerTime
            }
            alert("O jogo acabou - " + Phase)
            addButton()
        }, 10)
        
    }
    updateSquare(position)
}

function updateSquare (position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
}

function addButton () {
    button.classList.remove("none")
}


button.addEventListener ("click", newGame)

function newGame () {
    let squares = document.querySelectorAll(".square")
    
    squares.forEach((square) => {
        let position = square.id
        board = ["", "", "", "", "", "", "", "", ""]
        let symbol = board[position]
        
        
        if (symbol != "") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }   
    })
}