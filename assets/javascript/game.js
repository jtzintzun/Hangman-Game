//global variables
var hangmanWords = ["attention", "believer", "unforgettable", "wild thoughts"];
var videosArray = ["https://www.youtube.com/embed/nfs8NYg7yQM?autoplay=1","https://www.youtube.com/embed/7wtfhZwyrcc?autoplay=1","https://www.youtube.com/embed/CTFtOOh47oo?autoplay=1","https://www.youtube.com/embed/fyaI4-5849w?autoplay=1"];
var title_G = ["Atention","Imagine Dragons - Believer", "French Montana - Unforgettable ft. Swae Lee", "Wild Thoughts ft. Rihanna, Bryson Tiller"];
var currentWord_G;
var correctLetterArray_G;
var currentWordArr_G;
var lettersAlready_G = [];
var letterTyped_G;
var wins = 0;
var isGameStarted = false;
var attemptsLeft_G = 12;
var currentWordPosition_G;
//functions

function newWord() {
  var random = Math.floor(Math.random() * (hangmanWords.length - 1)) + 1;
  console.log("random number:" + random);
  currentWordPosition_G = random
  var currentWord = hangmanWords[random]
  return currentWord
}
// end of function newWord

// Function to convert chosen word string to an array

function stringToArray() {
  var currentWordArr = currentWord_G.split("");
  return currentWordArr

}
// end of function stringToArray

//Function set the array - CorrectLetterarray- insert "_" in the array

function setArray() {
  var correctLetterArray = []
  for (var i = 0; i < currentWord_G.length; i++) {
    correctLetterArray.push("_");
  }
  return correctLetterArray
}


// funtion to deffine the position of the letters

function validateKeyPressed() {
  if (currentWord_G.includes(letterTyped_G)) {

    for (var i = 0; i < currentWordArr_G.length; i++) {
      if (currentWordArr_G[i] === letterTyped_G) {
        correctLetterArray_G[i] = letterTyped_G
        document.getElementById("word").innerHTML= correctLetterArray_G.join(" ");
      }
    }
  } else {
    if (!lettersAlready_G.includes(letterTyped_G)) {

      console.log("pusshing letter typed:" + letterTyped_G + " to the array letters already guessed " + lettersAlready_G);
      lettersAlready_G.push(letterTyped_G);
      attemptsLeft_G--;
      console.log("Number of guesses remaining "+ attemptsLeft_G);
      document.getElementById("remainig").innerHTML= attemptsLeft_G;
      document.getElementById("letterAlreadyGuessed").innerHTML= lettersAlready_G;
    }
  }
}

//var positionsLetters_G = positionsLetters()
// end of function positionsLetters

// Function anyKey set the parameters to start the game
function anyKey() {
  currentWord_G = newWord();
  console.log("This is chosen word from the array: " + currentWord_G);
  currentWordArr_G = stringToArray()
  console.log("This is chosen word in array " + currentWordArr_G);
  correctLetterArray_G = setArray();
  console.log("This is the current word array ready to start the game: " + correctLetterArray_G);
  lettersAlready_G = [];
  document.getElementById("image").src = "assets/images/hangeman.jpg"
  document.getElementById("video").src = ""
  document.getElementById("word").innerHTML= correctLetterArray_G.join(" ");
  document.getElementById("wins").innerHTML= wins;
  document.getElementById("titleHeader").innerHTML= "WELCOME TO HANGMAN";
}

// End funtion anyKey

function playing() {
  //wrongOrRight()
  validateKeyPressed()
  console.log("These are the correct letters array " + correctLetterArray_G);
  console.log("These are the letters already guessed " + lettersAlready_G);
}

// Function Game execute the futions necesaries to play

function game(letterTyped) {
  if (!isGameStarted) {
    anyKey();
    isGameStarted = true;
    return;
  }
  letterTyped_G = letterTyped
  if (attemptsLeft_G > 0) {
    playing();
    if (!correctLetterArray_G.includes("_")) {
      wins = wins++
      document.getElementById("wins").innerHTML= wins;
      document.getElementById("image").src = "assets/images/" + currentWord_G + ".jpg";
  //    document.getElementById("video").src = "https://www.youtube.com/embed/7wtfhZwyrcc?autoplay=1"
      document.getElementById("video").src = videosArray[currentWordPosition_G];
      document.getElementById("titleHeader").innerHTML= title_G[currentWordPosition_G];
      attemptsLeft_G = 12;
      isGameStarted = false;
      wins = wins++
    }
  } else {
    attemptsLeft_G = 12;
    isGameStarted = false;
    document.getElementById("titleHeader").innerHTML= "GAME OVER";
    document.getElementById("image").src = "assets/images/game-over-arcade.png";

  }
}
