const form = document.getElementById('inscriptionForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    let errors = [];

    // réinitialiser le style pour les champs invalide
    [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.classList.remove('invalid');
    });

    // Vérifier que le prénom contient au moins 2 caractères
    if (firstNameInput.value.trim().length < 2) {
        errors.push("Le prénom doit contenir au moins 2 caractères.");
        firstNameInput.classList.add('invalid');
    }

    // Vérifier que le nom contient au moins 3 caractères
    if (lastNameInput.value.trim().length < 3) {
        errors.push("Le nom doit contenir au moins 3 caractères.");
        lastNameInput.classList.add('invalid');
    }

    // Vérifier que l'email est valide
    
    if (!isValidEmail(emailInput.value.trim())) {
        errors.push("L'adresse email n'est pas valide.");
        emailInput.classList.add('invalid');
    }

    // Vérifier que le mot de passe respecte les critères
    
    if (!isPasswordSecure(passwordInput.value)) {
        errors.push("Le mot de passe doit contenir au moins 6 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
        passwordInput.classList.add('invalid');
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        errors.push("Les mots de passe ne correspondent pas.");
        confirmPasswordInput.classList.add('invalid');
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === emailInput.value.trim())) {
        errors.push("Cette adresse email est déjà utilisée.");
        emailInput.classList.add('invalid');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
        return;
    }

    const newUser = { 
        firstName: firstNameInput.value.trim(), 
        lastName: lastNameInput.value.trim(), 
        email: emailInput.value.trim(), 
        password: passwordInput.value 
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Inscription réussie!');
    document.getElementById('inscriptionForm').reset();
});

function isPasswordSecure(password) {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}