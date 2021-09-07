// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//***FUNZIONI ***/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1. generare 5 numeri random e dichiararli con un alert( non duplicati)
var numeriRandom = [];

while(numeriRandom.length < 5) {
    var num = getRndInteger(1, 100);

    if(numeriRandom.includes(num) == false) {
        numeriRandom.push(num);
    }
}
alert(numeriRandom);

//2. dopo 30 secondi
//3. chiedo per 5 volte all'utente di inserire un numero e lo salvo in un array
//4. controllo i due array, quali numeri l'utente ha indovinato e stampo il punteggio
setTimeout(function() {
    var sceltaNumeri = [];

    for(var i = 1; i <= 5; i++) {
        var numero = parseInt(prompt("Inserisci un numero"));
        sceltaNumeri.push(numero);
    }

    var numeriAzzeccati = [];

    for(var i = 0; i < sceltaNumeri.length; i++) {
        if(numeriRandom.includes(sceltaNumeri[i]) == true && numeriAzzeccati.includes(sceltaNumeri[i]) == false){
            numeriAzzeccati.push(sceltaNumeri[i]);
        }
    }
    if(sceltaNumeri.length > 0) {
       alert(`Bravo! Hai indovinato ${numeriAzzeccati.length} numeri (${numeriAzzeccati})`); 
    } else {
        alert("Peccato! Ritenta");
    }
}, 3000);



