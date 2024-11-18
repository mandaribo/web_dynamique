const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://2395016:MongolianMen!@cluster0.nbrpk.mongodb.net/';
const client = new MongoClient(url);

async function connectDB() {
    try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('mydb');
    db.collection('livres').insertMany(
    [
    { titre: 'Guilty', author: 'Taemin', annee: 2023, genre : 'drame', disponible: true },
    { titre: 'Bound', author: 'Key', annee: 2022, genre: 'roman', disponible: false },
    { titre: 'Blue', author: 'Onew', annee: 2018, genre: 'science fiction', disponible: true },
    { titre: 'Chase', author: 'Minho', annee: 2022, genre: 'roman', disponible: false },
    { titre: 'Déja-Boo', author: 'Jonghyun', annee: 2015, genre: 'mystère', disponible: false },
    ]);
    console.log('Created the library');

    const tab = db.collection('users').find({ age:
    { $gt: 30 } }).toArray();
    console.log(tab);
    console.log('Found smth question mark');
    } 
    catch (err) {
    console.error(err);
    }
}
connectDB();