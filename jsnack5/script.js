
let dispari = [];

for (let i = 0; i < 6; i++) {
    let numero = prompt("Inserisci un numero " + (i+1));    

    if(numero%2 != 0){
        dispari.push(numero);
    }
}
// volevo farlo con un ciclo for ma funziona anche così
console.log(dispari);


