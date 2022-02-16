// ----- VARIABILI -----
const gameWrapper = document.getElementById("wrapper");  // selezioniamo il container

let numberGrid;

const bombList = [];

gameWrapper.addEventListener('click', selectThisGrid);

// ----- FUNZIONI -----
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBomb () {
    while (bombList.length < 16) {
        const bombNumber = getRandomInt(1, 16);
        if (!bombList.includes(bombNumber)) {
            bombList.push(bombNumber);
        }   
    }
}

function selectThisGrid(event) {
    console.log(event.target);
    const squareWrapper = event.target.closest('.element');
    squareWrapper.classList.add('selected');
}

function getGameMode() {
    let gameMode = document.getElementById("difficulty").value;
    
    if (gameMode == "easy") {
        numberGrid = 10;
    } else if (gameMode == "hard") {
        numberGrid = 9;
    } else {
        numberGrid = 7;
    }
    console.log(numberGrid);
    return numberGrid; 
}

function getGrid(numberGrid) {
    gameWrapper.innerHTML = "";

    for (let i = 1; i <= Math.pow(numberGrid, 2); i++) {
        const squareWrapper = document.createElement("div");
        gameWrapper.append(squareWrapper);
        squareWrapper.classList.add("element");
        squareWrapper.style = `width: calc(100% / ${numberGrid}`
        squareWrapper.append(i);
    }
}

function play() {
    getGameMode();
    getGrid(numberGrid);
    createBomb();
}


// SEZIONE OPERATIVA
document.getElementById("play").addEventListener("click", play);


