//choix de la base de données
use ('mydb');

//afficher tous les livres
console.log('Tous les livres');
const livres = db.getCollection('livres').find({}).toArray();
console.log(livres);