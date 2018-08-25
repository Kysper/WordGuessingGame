var WordSelection = ["army", "nuclear", "delta", "alpha", "corpsman", "sniper",
    "grunt", "private", "general", "commander", "tanks", "marines",
    "navy", "airforce", "grenades", "missles", "nato", "zulu",
    "battalion", "strike", "team", "breach",
];

var maxGuesses = 10;

var letterGuesses = [];
var wordIndex;
var wordGuess = [];
var guessesLeft = 0;
var gameHasStarted = false;
var gameHasEnded = false;
var wins = 0;

function gameReset() {
    guessesLeft = maxGuesses;
    gameHasStarted = false;
    letterGuesses = [];
    wordGuess = [];

    wordIndex = Math.floor(Math.random() * (WordSelection.length));

    for (var i = 0; i < WordSelection[wordIndex].length; i++) {
        wordGuess.push("_ ");
    }

    document.getElementById("winText").innerHTML = "";

    updateScreen();
};

function updateScreen() {
    document.getElementById("wins-link").innerHTML = wins;
    document.getElementById("current-word").innerHTML = "";
    for (var i = 0; i < wordGuess.length; i++) {
        document.getElementById("current-word").innerHTML += wordGuess[i];
    }
    document.getElementById("guesses-remain").innerHTML = guessesLeft;
    document.getElementById("guessed-letters").innerHTML = letterGuesses;

    if (guessesLeft <= 0) {
        document.getElementById("winText").innerHTML = "Sorry you lose!";
        gameHasEnded = true;
    }

};

function updateEnemy() {
    document.getElementById("enemyImage").src = "../WordGuessingGame/assets/image/enemy.png";
};




document.onkeydown = function (event) {
    if (gameHasEnded) {
        gameReset();
        gameHasEnded = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};


function makeGuess(letter) {
    if (guessesLeft > 0) {
        if (gameHasStarted = false) {
            gameHasStarted = true;
        }

        if (letterGuesses.indexOf(letter) === -1) {
            letterGuesses.push(letter);
            evalGuess(letter);
        }
    }
    updateScreen();

    winChecker();

};

function winChecker() {
    if (wordGuess.indexOf("_ ") == -1) {
        wins++;
        gameHasEnded = true;
        document.getElementById("winText").innerHTML = "Congrats you win!";
    }


};

function evalGuess(letter) {
    var locations = [];

    for (var i = 0; i < WordSelection[wordIndex].length; i++) {
        if (WordSelection[wordIndex][i] === letter) {
            locations.push(i);
        }
    }

    if (locations.length <= 0) {
        guessesLeft--;
        updateEnemy();
    }
    else {
        for (var i = 0; i < locations.length; i++) {
            wordGuess[locations[i]] = letter;
        }
    };
}
