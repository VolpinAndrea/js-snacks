
let somma = 0;

for (let i = 0; i < 10; i++) {
    let numero = prompt("Inserisci un numero " + (i+1));
    somma += parseInt(numero); 
    //somma = somma+numero;
   // console.log(somma);
}


console.log(somma);