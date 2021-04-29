//scriviamo una fuzione con cui ottenere un valore random tra 1 e 5
//nella fuzione seguente otteniamo un numero tra due valori specificati
//che non potrà mai essere più piccolo di min, nè mai uguale o superiore a max
/*function ottieniRandom(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min)) + min;//il max è escluso e il minimo è incluso
}*/

//scriviamo una funzione che confronta il numero random con il numero inserito nel form
//richiamiamo la funzione sull'onclick del bottone
function gioca(){
        document.getElementById("btnPlay").onclick = function confronta() {

        let num = document.getElementById("inputNumber").value;//acuisisce il valore dalla casella di input del form
        let numRandom = Math.floor(Math.random() * 6); //genera un valore random tra 0 e 5 metodo più semplice
        //confronta il valore inserito con il numero random generato
        if (+num === numRandom)
            alert("Hai vinto! hai indovinato il numero di dita");
        else
            alert("Non hai indovinato, il numero di dita era: " + numRandom);
        }
    }
        





