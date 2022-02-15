const gameWrapper = document.getElementById("wrapper");  // selezioniamo il container

let numberGrid;

const getGameMode = function () {
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

const getGrid = function (numberGrid) {
    gameWrapper.innerHTML = "";

    for (let i = 1; i <= Math.pow(numberGrid, 2); i++) {
        const squareWrapper = document.createElement("div");
        gameWrapper.append(squareWrapper);
        squareWrapper.classList.add("element");
        squareWrapper.style = `width: calc(100% / ${numberGrid}`
        squareWrapper.append(i);
    }
}

const play = function() {
    getGameMode();
    getGrid(numberGrid);
}

document.getElementById("play").addEventListener("click", play);



