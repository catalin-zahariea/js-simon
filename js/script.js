// --------------------------------------
// Initial alert that display 5 random integers from 1 to 100
// 
// FUNCTION
//
function generateFiveRandomIntegers (min, max) {

    // Variables
    var randomNumbers = [];
    var amountOfNumbers = 5;
    //
    // Pushing 5 random integers inside my randomNumbers array.
    // Using a FOR LOOP because I know the exact number of elements I need.
    //
    for (var i = 0; i < amountOfNumbers; i++) {

        var randomNumber = Math.floor(Math.random() * max) + min;
        randomNumbers.push(randomNumber);
    }

    console.log(randomNumbers);

    return randomNumbers;
}
//
// Displaying the alert with 5 random integers.
//
alert(`Abbiamo generato 5(cinque) numeri casuali. 
Avrà a disposizione 30 secondi per memorizzarli e in seguito digitarli. 
\n\n I numeri sono i seguenti: \n\n ${generateFiveRandomIntegers(1, 100)}`);
//
// --------------------------------------
//