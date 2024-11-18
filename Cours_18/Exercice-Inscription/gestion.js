// Récupérer les utilisateurs du localStorage
let users = JSON.parse(localStorage.getItem('users')) || []; 

// Mettre à jour le compteur et le tableau au chargement de la page
updateCount();
updateTable();

function updateCount() {
    // Utiliser reduce pour compter le nombre d'utilisateurs inscrits
    const userCount = users.reduce((count) => count + 1, 0);
    document.getElementById('userCount').textContent = `Nombre d'utilisateurs inscrits : ${userCount}`;
}

function updateTable() {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Réinitialiser le corps du tableau

    // Utiliser map pour obtenir les prénoms, noms et emails des utilisateurs
    users.map((user, index) => {
        const newRow = tableBody.insertRow();//ajout ligne
        newRow.insertCell(0).textContent = user.firstName; //colonne 1
        newRow.insertCell(1).textContent = user.lastName;//colonne 2
        newRow.insertCell(2).textContent = user.email;//colonne 3

        // Créer un bouton de suppression dans la colonne 4
        const deleteCell = newRow.insertCell(3);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.onclick = () => deleteUser(index); // Appeler la fonction deleteUser avec l'index
        deleteCell.appendChild(deleteButton);
    });

    
}

function deleteUser(index) {
    // Supprimer l'utilisateur du tableau
    users.splice(index, 1);
    // Mettre à jour le localStorage
    localStorage.setItem('users', JSON.stringify(users));
    // Mettre à jour le compeur et le tableau 
    updateCount();
    updateTable();
}

//Recherche email
const search = document.getElementById('searchEmail');
search.addEventListener('click', function searchEmail() {
    const searchFirstName = document.getElementById('searchFirstName').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Réinitialiser les résultats de recherche

    // Filtrer les utilisateurs par prénom
    const filteredUsers = users.filter(user => user.firstName.toLowerCase() === searchFirstName);

    if (filteredUsers.length > 0) {
        filteredUsers.forEach(user => {
            searchResults.innerHTML += `<p>Email de ${user.firstName}: ${user.email}</p>`;
        });
    } else {
        searchResults.innerHTML = '<p>Aucun utilisateur trouvé avec ce prénom.</p>';
    }
});

