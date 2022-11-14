
let invitati =["matteo","diana","pietro","andrea","giacomo","paolo","claudia"];


    let nome = prompt("Inserisci il tuo nome");
    //console.log(nome);
    let contrtollo = false;

    for (let i = 0; i < invitati.length; i++) {
        if(invitati[i] == nome.toLowerCase()){
            contrtollo = true;
            break;
        }else{
        }
    }
    if(contrtollo){
        console.log("Benvenuto! "+ nome);
    } else {
        console.log("Il tuo nome non è nella lista");
    }


