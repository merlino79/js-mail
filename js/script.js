var nomi = [
    "luca",
    "marco",
    "serena ",
    "tey",
    "gianluca",
    "alessandro",
    "simone",
    "martino",
    "silvia"
];


var name_to_found = prompt('inserisci il nome'); // promt






var presente = false;

for (var i = 0; i < nomi.length; i++) {

    var nome = nomi[i];
    //console.log(nomi);



    if (nome === name_to_found) {

        presente = true;
        console.log("sei stato trovato")
        break //stoppo il ciclo
    }

}

if (presente) {
    //console.log("ci sei")
    document.getElementById('exit').innerHTML = name_to_found + " sei presente";


} else {
    //console.log("non ci sei")
    document.getElementById('exit').innerHTML = name_to_found + " non sei presente, mi spiace";

}




//document.getElementById('exit').innerHTML = name_to_found + " non sei presente";