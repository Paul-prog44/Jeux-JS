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
            document.getElementById("userGuess")
                    .style.display ="block"

            numberToFind = getRandomInt(1000);
            stopConfetti();
            console.log(numberToFind)
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
                    countDownDisplay.classList.add("suspens")
                }

                if (compteur < 0){
                    clearInterval(countDownFunction)
                    document.getElementById("userGuess")
                    .style.display ="none"
                    resultDisplay.innerHTML = "Le nombre à trouver était " + numberToFind + " !"
                    let audio = new Audio("./audio/defaite.mp3");
                    audio.play();
                    countDownDisplay.classList.remove("suspens")

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
            //fonction confetti en cas de victoire
            startConfetti();
            clearInterval(countDownFunction)
          })()
    }
}

//detecte le click sur le bouton Go
document.getElementById("compare")
        .addEventListener("click", compareNumberToFind)




