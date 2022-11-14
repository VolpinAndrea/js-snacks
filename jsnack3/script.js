
let somma = 0;
let maggiore = 0;
let minore = 0;

for (let i = 0; i < 10; i++) {
    let numero = prompt("Inserisci un numero " + (i+1));
    somma += parseInt(numero); 
    //somma = somma+numero;
    //console.log(somma);

    if(i == 0){
        maggiore = numero;
    }else if (i>=1 && numero >= maggiore){
        maggiore = numero;
    }
    if(i == 0){
        minore = numero;
    }else if (i>=1 && numero <= minore){
        minore = numero;
    }

}


console.log("Somma: "+somma);
console.log("Media: "+ somma/10)
console.log("Maggiore: "+ maggiore)
console.log("minore: "+ minore)