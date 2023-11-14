const home = document.querySelector('#home');
const reseau = document.querySelector('#reseau');
const projet = document.querySelector('#projet');
const toggle_on = document.querySelector('#btn-toggle-off');
const toggle_off = document.querySelector('#btn-toggle-on');

// Fonction pour définir le mode sombre
function setDarkMode(value) {
    const body = document.body;
    body.classList.toggle('dark-mode', value);

    const elementsToToggleDarkMode = document.querySelectorAll('.projet-container, .img-container, .gran-img-contenaire, .container, .contenaire, .competences, .bar-bas, .image_language, .mes_reseaux');

    elementsToToggleDarkMode.forEach(function (element) {
        element.classList.toggle('dark-mode', value);
    });

    // Mettre à jour le bouton de basculement en fonction du mode sombre
    toggle_off.style.display = value ? 'block' : 'none';
    toggle_on.style.display = value ? 'none' : 'block';
}

// Récupérer la préférence de l'utilisateur depuis localStorage
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// Événements de navigation
home.addEventListener('click', () => {
    window.location.href = './index.html';
});

reseau.addEventListener('click', () => {
    window.location.href = './reseau.html';
});

projet.addEventListener('click', () => {
    window.location.href = './projet.html';
});

// Événements de basculement du mode sombre
toggle_off.addEventListener('click', function () {
    setDarkMode(false);
    localStorage.setItem('darkMode', 'false');
});

toggle_on.addEventListener('click', function () {
    setDarkMode(true);
    localStorage.setItem('darkMode', 'true');
});
