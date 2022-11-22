const buttonPlay = document.getElementById("beginGame");
const allWords = ["fleur", "montagne", "ministre","congolais", "saltimbanque", "économie", "pétrole"];
let max = allWords.length;
const wordToFindDiv= document.getElementById("wordToFindDiv");


buttonPlay.addEventListener("click", function() {
    beginGame ();
});

function beginGame () {
    //générer un mot au hasard
    let wordToFind = generateWord();
    wordToFindDiv.innerHTML = wordToFind;
    let wordToFindArray = Array.from(wordToFind);
    let table = document.createElement("table");
    //tr = ligne
    let line = document.createElement("tr");
    
    wordToFindArray.forEach(letter => {
        //td = case d'un tableau
        let td = document.createElement("td");
        //Stock la lettre dans le dataset
        td.dataset.letter = letter;
        //Affiche "_"
        td.innerText = "_";
        //Ajoute une case à la ligne
        line.appendChild(td);
    })
    table.appendChild(line);
    wordToFindDiv.appendChild(table)
}

function generateWord() {
    let indexword = getRandomInt(allWords.length);
    return allWords[indexword];
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    //Retourne un nombre aléatoire compris entre 0 et 0.99..., 
}
console.log(getRandomInt(max))

function generateKeyboard(capital = false) {
    let tab = [];
    for (i=0; i<26; i++) {
        if (capital) 
        {
        tab.push(String.fromCharCode(i + 65));
        } else 
        {
            tab.push(String.fromCharCode(i +97));
        }
    }
    return tab;
}