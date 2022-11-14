
let dispari = [];
let pari = [];

for (let i = 0; i < 6; i++) {
    let numero = prompt("Inserisci un numero " + (i+1));    

    if(numero%2 != 0){
        dispari.push(numero);
    }else {
        pari.push(numero);
    }
}
// volevo farlo con un ciclo for ma funziona anche così
console.log(dispari);
console.log(pari);

console.log("DISPARI:");

for (let i = 0; i < dispari.length; i++) {
    console.log(dispari[i]);
}

console.log("PARI:");

for (let i = 0; i < pari.length; i++) {
    console.log(pari[i]);
}
//manca il controllo su il dato inserito -potrbbe non essere un intero-
