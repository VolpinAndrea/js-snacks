
let random = Math.round(Math.random()*10);
let numUtente = prompt("Inserisci un numero da 1 a 10");    

if (numUtente == random){
    console.log("Hai vinto!")
} else{
    console.log("Hai perso")
}

console.log(numUtente+":"+random);

