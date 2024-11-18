//choix de la base de données
use ('mydb');

//supprimer tous les livres de la collection
db.getCollection('livres').deleteMany({});

//ajout de 6 livres dans la collection livres
db.getCollection('livres').insertMany(
    [
    { titre: 'Guilty', author: 'Taemin', annee: 2023, genre : 'drame', disponible: true },
    { titre: 'Bound', author: 'Key', annee: 2022, genre: 'roman', disponible: false },
    { titre: 'Blue', author: 'Onew', annee: 2018, genre: 'science fiction', disponible: true },
    { titre: 'Chase', author: 'Minho', annee: 2022, genre: 'roman', disponible: false },
    { titre: 'Déja-Boo', author: 'Jonghyun', annee: 2015, genre: 'mystère', disponible: false },
    { titre: 'Novocaine', author: 'Key', annee: 2024, genre: 'americam pop ew', disponible: true },
    ]
);

//afficher tous les livres
console.log('Tous les livres');
const tousLivres = db.getCollection('livres').find({}).toArray();
console.log(tousLivres);

db.getCollection('livres').deleteOne({titre: 'Novocaine'});

//afficher tous les livres
console.log('Tous les livres');
tousLivres = db.getCollection('livres').find({}).toArray();
console.log(tousLivres);

console.log('Quantité des livres disponibles');
const disponiblesNombre = db.getCollection('livres').find({disponible:true}).count();
console.log(disponiblesNombre);

/*
//afficher tous les livres disponibles
console.log('Tous les livres disponibles');
const livresDisponibles = db.getCollection('livres').find({disponible:true}).toArray();
console.log(livresDisponibles);

//afficher tous les titres avec les genres
console.log('Tous les titres avec genres');
const titresEtGenres = db.getCollection('livres').find({}, {titre: 1, genre: 1, _id: 0}).toArray();
console.log(titresEtGenres);

//update
db.getCollection('livres').updateMany({disponible:false},{$set :{disponible:true}});

//afficher tous les livres disponibles
console.log('Tous les livres disponibles');
livresDisponibles = db.getCollection('livres').find({disponible:true}).toArray();
console.log(livresDisponibles);

*/