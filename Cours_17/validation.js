const form = document.querySelector('form');

const nameInput = document.getElementById('prenom');
const surnameInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const mdpInput = document.getElementById('mdp');
const mdpConfirmInput = document.getElementById('mdp-confirm');

let errorsReal = false;

form.addEventListener('submit', function(event){
    let errors = [];
    console.log("hi");

    if (nameInput.value.trim() ===""){
        console.log("ERROR NAME");
        errors.push('Entrez votre prénom.')
    }
    if (nameInput.value.length <2){
        console.log("ERROR NAME2");
        errors.push('Le prénom doit contenir au moins 2 caractères.')
    }

    if (surnameInput.value.trim() ===""){
        console.log("ERROR SURNAME");
        errors.push('Entrez votre nom.')
    }
    if (surnameInput.value.length <3){
        console.log("ERROR SURNAME2");
        errors.push('Le nom doit contenir au moins 3 caractères.')
    }

    if (emailInput.value.trim() ===""){
        console.log("ERROR email");
        errors.push('Entrez votre email.')
    }
    if (!isValidEmail(emailInput.value)){
        console.log("ERROR email2");
        errors.push('Veuillez entrer une adresse email valide.')
    }

    if (mdpInput.value.trim() ===""){
        console.log("ERROR MDP");
        errors.push('Entrez votre mot de passe.')
    }
    if (!isValidMdp(mdpInput.value)){
        console.log("ERROR mdp2");
        errors.push('Veuillez entrer un mot de passe valide.')
    }

    if (mdpConfirmInput.value.trim() ===""){
        console.log("ERROR confirm MDP");
        errors.push('Confirmez votre mot de passe.')
    }
    if (mdpConfirmInput.value != mdpInput.value){
        console.log("ERROR confirm mdp2");
        errors.push('Les mots de passe ne sont pas indentiques.')
    }

    if (errors.length > 0){
        event.preventDefault();
        displayErrors(errors);
    }
    else{
        form.submit();
    }
});

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function isValidMdp(pw) {

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 6;

}
    
function displayErrors(errors){
    if(errorsReal){
        const element = document.getElementById('error');
        element.remove();
    }
    const errorContainer = document.createElement('div');
    errorContainer.id = 'error';
    errors.forEach(function(error){
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorContainer.appendChild(errorMessage);
    });
    form.appendChild(errorContainer);
    errorsReal = true;
};

function saveUser(){
    const newUser = {
        firstName: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
    };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
}