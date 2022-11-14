
let max = prompt("Inesrisci il numero massimo consentito")

let random = Math.round(Math.random()*(max-1))+1;

let numUtente = prompt("Inserisci un numero da 1 a "+ max);    


console.log("TU "+numUtente+":"+random+" COMPUTER");

if (numUtente == random){
    console.log("Hai vinto!")
} else{
    console.log("Hai perso")
}


