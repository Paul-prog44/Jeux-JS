//générer un chiffre en aléatoire
//L'utilisateur fait une proposition
//Le programme lui répond plus ou moins

let numberToFind = 0;
let timeleft= 0;

function countdown() {
    console.log("test")
}
const countDownDisplay = document.getElementById("countDownDisplay")
let countDownFunction = null

document.getElementById("beginGame")
        .addEventListener("click", function() {
            numberToFind = getRandomInt(1000);
            //Fonction compteur à rebours
            compteur = 30;
            if(countDownFunction != null) {
                clearInterval(countDownFunction)
            }
            countDownFunction = setInterval(() => {
                countDownDisplay.innerHTML = compteur
                compteur--
                //Change la couleur du compte à rebours
                if (compteur >= 20 ) {
                    countDownDisplay.style.color = "rgb(17, 250, 0)"
                }
                if (compteur < 20  ) {
                    countDownDisplay.style.color = "rgb(250, 154, 0)"
                }

                if (compteur < 10  ) {
                    countDownDisplay.style.color = "rgb(250, 0, 0)"
                }

                if (compteur < 0){
                    clearInterval(countDownFunction)
                }
            },1000)
        })

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

//detecte le click sur le bouton Go
document.getElementById("compare")
        .addEventListener("click", compareNumberToFind)




