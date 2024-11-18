//choix de la base de données
use ('mydb');

//afficher tous les livres disponibles
console.log('Tous les livres');
const livres = db.getCollection('livres').find({disponible:true}).toArray();
console.log(livres);