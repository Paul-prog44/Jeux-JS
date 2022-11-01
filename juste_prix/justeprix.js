//générer un chiffre en aléatoire
//L'utilisateur fait une proposition
//Le programme lui répond plus ou moins

let numberToFind = 0;

document.getElementById("beginGame")
        .addEventListener("click", function() {
    numberToFind = getRandomInt(1000);
});

//Detecter lorsque l'utilisateur appuie sur ENTER pour comparer les nombres
document.getElementById("userGuess")
        .addEventListener("keyup", function(event) {
            if (event.key == "Enter") {compareNumberToFind()}
            }
        )


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
        resultDisplay.innerHTML = "C'est gagné !!!";
        //Fichier son applaudissement
        (function() {
            let audio = new Audio("./audio/clapping.mp3");
            audio.play();
          })()
    }
}

document.getElementById("compare")
        .addEventListener("click", compareNumberToFind)