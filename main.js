console.log("hello");

/* for(let i=0; i<3; i++){
    //istruzioni da eseguire
} */

//creo il contatore
//una variabile che chiamo i, a cui do valore 0 
//condizione: i è minore di 3? sì, allora eseguo le istruzioni

//incremento il valore di i di 1
//quindi ora i=1
//condizione: i è minore di 3? sì, allora eseguo le istruzioni

//continua ad aumentare di 1, quando i non sarà più minore di 3 si fermerà e non eseguirà più le istruzioni
    
//0 - PROGRAMMA
//Scrivi un programma che stampi i numeri da 1 a 100
//per i multipli di 3 stampi “Fizz”
//per i multipli di 5 stampi “Buzz”
//per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

//Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
//scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//1 - preparazione

//2 - raccolta dati

//3 - elaborazione

//4 - output
for(let i=1; i<101; i++){
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz");
    } else if (i%3===0){
        console.log("Fizz");
    } else if (i%5===0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}