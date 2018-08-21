

var maxTries = 10;

var guessesLeft = 0;
var gameStart = false;
var userGuesses = [];
 var wordList = ["Gold","Codes","FoxOne", 'FoxTwo', 'Brevity', 'Delta',
'Romeo','Alpha','Julia','Bravo','Sparrow','Tomahawk','Infrared',
'Nuclear','Atomic','Catastrophic','Point','Impact',
'Charlie','Zulu','Ranger','Marine','Sniper','Army',
'Flag','Armory','Grenade','Breach','MOAB'];
var letterChecker = [];
var gameFinished = false;




function StartGame()
{
    gameStart = true;
    console.log(gameStart);
    maxTries = guessesLeft;
}

function GameEnd()
{
    gameFinished = true;
    console.log(gameFinished);
    ResetGame();
}

function ResetGame()
{
    guessesLeft = 0;
    gameStart = false;
    gameFinished = false;
}
function WordPicker()
{
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
}


document.onkeyup = function(event) {
    console.log(event);
      event.key;
    if(event.keyCode == 32){
        
        StartGame();
        WordPicker();
    }
};





