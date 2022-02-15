const gameWrapper = document.getElementById("wrapper");  // selezioniamo il container
let gameMode;
let numberGrid;

const getGameMode = function () {
    let gameMode = document.getElementById("difficulty").value;
    
    if (gameMode == "easy") {
        numberGrid = 101;
    } else if (gameMode == "hard") {
        numberGrid = 82;
    } else {
        numberGrid = 50;
    }

    return numberGrid;
}

const getGrid = function (numberGrid) {
  
    for (let i = 1; i < numberGrid; i++) {
        const squareWrapper = document.createElement("div");
        gameWrapper.append(squareWrapper);
        squareWrapper.classList.add("element");
        squareWrapper.append(i);
    }
}



document.getElementById("play").addEventListener("click", getGameMode, getGrid);