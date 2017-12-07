//global variables
var hangmanWords = ["attention", "believer", "unforgettable", "wild thoughts"];
var currentWord_G;
var correctLetterArray_G;
var currentWordArr_G;
var lettersAlready_G = [];
var letterTyped_G;
var wins = 0;
var isGameStarted = false;
var attemptsLeft_G = 12;

//functions

function alphabet() {
  var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " "];
  var random = Math.floor(Math.random() * (26)) + 1;
  // console.log("random number");
  // console.log(random);
  // console.log("var random letter");
  var randomleter = alphabet[random]
  //    console.log(randomleter);
  return randomleter
}


function newWord() {
  var random = Math.floor(Math.random() * (hangmanWords.length - 1)) + 1;
  //  console.log("random number:");
  //  console.log(random);
  var currentWord = hangmanWords[random]
  //  console.log("Word chosen");
  //  console.log(currentWord);
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
    //  Define lettes positions
    //   var positionsLetters =[]
    for (var i = 0; i < currentWordArr_G.length; i++) {
      if (currentWordArr_G[i] === letterTyped_G) {
        //        positionsLetters.push(i)
        correctLetterArray_G[i] = letterTyped_G

        document.getElementById("word").innerHTML= correctLetterArray_G.join(" ");
      }
    }
    //    return positionsLetters
    //    console.log("correct letters positions");
    //    console.log(positionsLetters);

  } else {
    if (!lettersAlready_G.includes(letterTyped_G)) {

      console.log("pusshing " + letterTyped_G + " to " + lettersAlready_G);
      lettersAlready_G.push(letterTyped_G);
      attemptsLeft_G--;
    }
  }
}

//var positionsLetters_G = positionsLetters()
// end of function positionsLetters

// Function anyKey set the parameters to start the game
function anyKey() {
  currentWord_G = newWord();
  console.log("chosen word:");
  console.log(currentWord_G);
  currentWordArr_G = stringToArray()
  console.log("chosen word in array");
  console.log(currentWordArr_G);
  correctLetterArray_G = setArray();
  lettersAlready_G = [];
  document.getElementById("image").src = "assets/images/hangeman.jpg"
  document.getElementById("video").src = ""

}

function playing() {
  //wrongOrRight()
  validateKeyPressed()
  console.log("correct letters array");
  console.log(correctLetterArray_G);
  console.log("letter already guessed");
  console.log(lettersAlready_G);
}

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
      document.getElementById("image").src = "assets/images/" + currentWord_G + ".jpg"
      document.getElementById("video").src = "https://www.youtube.com/embed/7wtfhZwyrcc?autoplay=1"

      attemptsLeft_G = 12;
      isGameStarted = false;
    }
  } else {
    attemptsLeft_G = 12;
    isGameStarted = false;
  }
}
