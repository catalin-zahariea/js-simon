// -------------------------------------------
// Esercizio: js-simon
//
// Description:
// 1) Generate 5 random integers with no duplicates within an alert().
// 2) After the alert() is closed a 30 sec timer will start.
// 3) At the end of the timer the user will be prompted to input 5 numbers
// that he remembers from the 5 random generated ones.
// 4) The user numbers will be placed inside an array.
// 5) The user numbers will be checked if correct with the original random
// ones.
// 6) Display an alert with how many numbers the user got right and which ones.
//
// -------------------------------------------

//
// VARIABLES
//
var GUESS = 5; // constant
var MAX_INT = 10; // constant
var randomArr = randomIntGen(GUESS, MAX_INT);

// ------------------------------------------
// 1) Generate 5 random integers with no duplicates within an alert().
// ------------------------------------------

function randomIntGen(maxGuess, maxValue) {
  var arr = [];

  while (arr.length < maxGuess) {
    var randomInt = Math.floor(Math.random() * maxValue) + 1;
    if (!arr.includes(randomInt)) {
      arr.push(randomInt);
    }
  }
  return arr;
}

alert(
  `Ecco una sequenza di numeri casuali compresi fra 1 e ${MAX_INT}.\n\nUna volta chiusa questa finestra avrai a disposizione 30 secondi per memorizzare i numeri, dopodichè ti verrà chiesto di inserirli uno alla volta.\n\nVediamo quanti ne indovini!\n\nQuesti sono i tuoi numeri: ${randomArr}`
);
console.log(`Random Numbers Array => ${randomArr}`);

// ------------------------------------------
// 2) After the alert() is closed a 30 sec timer will start.
// 3) At the end of the timer the user will be prompted to input 5 numbers
// that he remembers from the 5 random generated ones.
// ------------------------------------------

function myFunction(randomArray, maxGuess) {
  setTimeout(function () {
    var userArr = [];
    // ------------------------------------------
    // The user has 5 limitied tries, even if the digits duplicates.
    // ------------------------------------------
    for (var i = 0; i < maxGuess; i++) {
      var userInput = parseInt(
        prompt("Inserisca un numero che si ricorda della sequenza di prima:")
      );
      // ------------------------------------------
      // 4) The user numbers will be placed inside an array.
      // 5) The user numbers will be checked if correct with the original random ones.
      // ------------------------------------------
      if (!isNaN(userInput)) {
        if (!userArr.includes(userInput)) {
          if (randomArray.includes(userInput)) {
            userArr.push(userInput);
          }
        }
      }
    }
    // ------------------------------------------
    // 6) Display an alert with how many numbers the user got right and which ones.
    // ------------------------------------------
    if (userArr.length == maxGuess) {
      alert(
        `Complimenti! Hai azzeccato tutti i numeri!\n\nQuesti sono i numeri che hai indovinato: ${userArr}`
      );
    } else {
      alert(
        `Hai azzeccato ${userArr.length} numeri.\n\nI tuoi numeri corretti sono: ${userArr}`
      );
    }
  }, 30000);
}

myFunction(randomArr, GUESS);
