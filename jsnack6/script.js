
/* let dispari = [];

for (let i = 0; i < 6; i++) {
    let numero = prompt("Inserisci un numero " + (i+1));    

    if(numero%2 != 0){
        dispari.push(numero);
    }
}
// volevo farlo con un ciclo for ma funziona anche così
console.log(dispari);
*/ 
let random = Math.round(Math.random()*10);
let numUtente = prompt("Inserisci un numero da 1 a 10");    

if (numUtente == random){
    console.log("Hai vinto!")
} else{
    console.log("Hai perso")
}

console.log(numUtente+":"+random);

