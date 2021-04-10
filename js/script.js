//creazione lista 
var emails = [
    "luca@gmail.com",
    "marco@libero.it",
    "serena@libero.it ",
    "tey@libero.it",
    "gianluca@yahoo.it",
    "alessandro@hotmail.com",
    "simone@gmail.com",
    "martino@gmail.com",
    "silvia@gmail.com"
];

console.log(emails.length - 1);

var email_utente = prompt("inserisci la tua email");



//controllo della lista







for (var i = 0; i < emails.length; i++) {

    var this_Mail = emails[i];
    console.log(this_Mail);

    if (this_Mail === email_utente) {
        console.log("ci sei");
        document.getElementById("exit").innerHTML = "sei stato trovato"





    }
}