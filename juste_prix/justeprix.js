//générer un chiffre en aléatoire
//L'utilisateur fait une proposition

let numberToFind = 0;

document.getElementById("beginGame")
        .addEventListener("click", function() {
    numberToFind = getRandomInt(1000);
    alert (numberToFind);
});

//Detecter lorsque l'utilisateur appuie sur ENTER
document.getElementById("userGuess")
        .addEventListener( )

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let userGuess = document.getElementById("userGuess");
let resultDisplay = document.getElementById("resultDisplay");

function compareNumberToFind () {
    if (userGuess.value > numberToFind) {
        resultDisplay.innerHTML = "C'est moins !"
    } else if (userGuess.value < numberToFind) {
        resultDisplay.innerHTML = "C'est plus !"
    } else if (userGuess.value == numberToFind) {
        resultDisplay.innerHTML = "C'est gagné !!!"
    }
}

document.getElementById("compare")
        .addEventListener("click", compareNumberToFind)