let namesArray = ["gino", "franco", "mario", "luigi", "luca", "michele", "carlo", "giovanni", "giacomo", ];

let surnamesArray = ["rossi", "carli", "giangi", "calli", "vanni", "dinaldi", "pardi", "cardo", "manfio", ];

let invitatiArray = [];
document.writeln("La lista degli invitati è:");

for (let i = 0; i < namesArray.length; i++){
    invitatiArray.push(`${namesArray[i]} ${surnamesArray[i]}`);
    document.writeln(`<br><br>${invitatiArray[i]}`);
}