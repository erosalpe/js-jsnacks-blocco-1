let x = prompt("inserisci quanti numeri vuoi vengano inseriti nell'Array");
let xNum = parseInt(x);

let numeriInteriArray = [];
let risultatoSommaDispari = 0;

for (let i = 0; i <= xNum; i++){
    numeriInteriArray[i] = i;
    if (i % 2 !== 0){
        console.log(`${risultatoSommaDispari}`, "+",  `${numeriInteriArray[i]}`);
        risultatoSommaDispari = risultatoSommaDispari + numeriInteriArray[i];
        console.log(`${risultatoSommaDispari}` );
    }
}
document.writeln(`La somma dei numeri in posizione dispari è: ${risultatoSommaDispari}`)