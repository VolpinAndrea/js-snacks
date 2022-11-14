
/* let parola1 = prompt("Inserisci una parola");
let parola2 = prompt("Inserisci un'altra parola");

if (parola1.length < parola2.length){
    console.log(parola1 + " " + parola2);
} else {
    console.log(parola2 + " " + parola1);

} */
let somma = 0;

for (let i = 0; i < 10; i++) {
    let numero = prompt("Inserisci un numero " + (i+1));
    somma += parseInt(numero); 
    //somma = somma+numero;
   // console.log(somma);
}


console.log(somma);