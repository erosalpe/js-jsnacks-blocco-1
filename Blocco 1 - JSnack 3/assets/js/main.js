let totale = 0;
for (let i = 0; i < 10; i++){
    let x = prompt("Inserisci numero");
    let xNum = parseInt(x);
    console.log(xNum);
    totale = totale + xNum;
    console.log(totale);
    if (i === 9){
        document.writeln(`Il totale è: ${totale}`);
    }
}

