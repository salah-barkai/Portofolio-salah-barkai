const home = document.querySelector('#home');
const reseau = document.querySelector('#reseau');
const projet = document.querySelector('#projet');
const toggle_on = document.querySelector('#btn-toggle-on');
const toggle_off = document.querySelector('#btn-toggle-off');

home.addEventListener('click', ()=>{
    window.location.href= './index.html';
});

reseau.addEventListener('click', ()=>{
    window.location.href='./reseau.html';
});

projet.addEventListener('click', ()=>{
    window.location.href= './projet.html';
})

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    toggle_off.addEventListener('click', function () {
        toggle_off.style.display = 'none';
        toggle_on.style.display = 'block';
        body.classList.toggle('dark-mode'); 
        const elementsToToggleDarkMode = document.querySelectorAll('.projet-container, .img-container, .gran-img-contenaire, .container, .contenaire, .competences, .bar-bas, .image_language, .mes_reseaux');

        elementsToToggleDarkMode.forEach(function (element) {
            element.classList.toggle('dark-mode');
        });
    });

    toggle_on.addEventListener('click', ()=>{
        toggle_off.style.display = 'block';
        toggle_on.style.display = 'none';
        body.classList.remove('dark-mode'); // Utilisez remove au lieu de toggle pour s'assurer que le mode sombre est désactivé
        const elementsToToggleDarkMode = document.querySelectorAll('.projet-container, .img-container, .gran-img-contenaire, .container, .contenaire, .competences, .bar-bas, .image_language, .mes_reseaux');

        elementsToToggleDarkMode.forEach(function (element) {
            element.classList.remove('dark-mode'); // Utilisez remove pour s'assurer que le mode sombre est désactivé
        });
    })
});


function setCookie(name, value, days) {
    var expires = "";
    
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}

// Exemple d'utilisation : définir un cookie nommé "theme" avec la valeur "dark" qui expire dans 30 jours
setCookie("theme", "dark", 30);


