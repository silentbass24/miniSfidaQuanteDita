//function to obtain a random number from 1 to 5
//in this way the result of function i s a number in a range specified by a max and a min value
/*function ottieniRandom(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min)) + min;//max value is included and min is not included
}*/

//function that check if the random number is equal to the input number
//function calling by the click on the submit button using onclick
document.getElementById("btnPlay").onclick = function confronta() {
    let num = document.getElementById("inputNumber").value;//acquire the number from the input field
    let numRandom = Math.floor(Math.random() * 6); //generates a random number from 0 to 5 (simple way to obtain a random number)
    //check if the random number is equal to the input number
    if (+num == numRandom)
        document.getElementById("result").innerHTML = "Hai vinto! hai indovinato il numero di dita";
    else{
        document.getElementById("result").innerHTML = "Non hai indovinato, il numero di dita era: " + numRandom;
        document.getElementById("inputNumber").value = "";
    }
}

        





