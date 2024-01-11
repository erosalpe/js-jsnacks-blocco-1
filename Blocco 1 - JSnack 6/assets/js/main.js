let x = prompt("Inserisci un numero");
let xNum = parseInt(x);

for(let i = 0; i <= xNum; i++){
    document.writeln(`Il cubo del numero ${i} è: ${i**2} <br>`);
}