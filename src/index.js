const grid  = document.querySelector('.grid')
const scoreDisplay = document.querySelector('score')
const width = 28

const layout = [

1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,
1,3,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,3,1,
1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,
1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,
1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,
1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,4,1,1,1,1,1,1,4,1,1,1,1,1,4,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,4,1,1,1,2,2,2,2,2,2,2,1,1,4,1,1,0,1,1,1,1,
4,4,4,4,4,4,4,4,1,1,1,2,2,2,2,2,2,2,1,1,4,4,4,4,4,4,4,4,
1,1,1,1,0,1,1,4,1,1,1,2,2,2,2,2,2,2,1,1,4,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,4,1,1,1,2,2,2,2,2,2,2,1,1,4,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,
1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,
1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,
1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,
1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,
1,3,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,3,1,
1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

]

//key
//0 - dot
//1 - wall
//2 - ghost lair
//3 - power pellet
//4 - empty

const squares = [];

//create the grid
function createBoard() {
    for(let i=0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        //add board layout 
        if(layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if(layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if(layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    } 
}

createBoard()

//starting position for pacman
let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add("pac-man")

//move pacman
function movePacman(e){
    squares[pacmanCurrentIndex].classList.remove("pac-man")

    switch(e.keyCode){
        case 37:
            if(pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -=1
            break
        case 38:
            if(pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -=width
            break
        case 39:
            if(pacmanCurrentIndex % width !== 0) pacmanCurrentIndex +=1
            break
        case 40:
            if(pacmanCurrentIndex % width !== 0) pacmanCurrentIndex +=width
            break
    }

    squares[pacmanCurrentIndex].classList.add()
}