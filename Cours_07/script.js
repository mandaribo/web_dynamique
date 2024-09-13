function afficher() {
    const nom = "viki";
    //alert("Je suis" + " " + nom);
    afficherConsole("debug mais en js");
    let b = '"Bonjour" dit-il';
    afficherConsole (b);
    let c = `Hello ${nom}`;
    afficherConsole ("avant appel de la fn test");
    afficherConsole (c);
}
function afficherConsole(message) {
    console.log (message);
}

const voitures = ["Saab", "Volvo", "BMW"];
voitures[0] = "Toyota";
afficherConsole(voitures);
voitures[1] = "Ferrari";
afficherConsole(voitures[1]);

const personne = {nom:"Jean-François", age:59, couleurYeux: "bleu"};
messagePersonne = `${personne.nom} a les yeux ${personne.couleurYeux}`;
afficherConsole(messagePersonne);
personne.age = personne.age - 18;
messagePersonne = `${personne.nom} a maintenant ${personne.age}`;
afficherConsole(messagePersonne);
const JFB = personne;
personne.nom = "viki";
const viki = personne;
const personnes = [JFB, viki];
afficherConsole(personnes[1]);
