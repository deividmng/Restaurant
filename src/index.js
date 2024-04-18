import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js'; 


// Inicializar la página con el contenido inicial
initialPageLoad();

// Definir el módulo de cambio de pestañas
let tabSwitchingModule = (function() {
    const mainDiv = document.querySelector('#content');

    const homeBtn = document.querySelector('#homeBtn'); 
    homeBtn.addEventListener("click", () => {
        clearPage();
        mainDiv.appendChild(initialPageLoad());
    });

    const menuBtn = document.querySelector('#menuBtn');
    menuBtn.addEventListener("click", () => {
        clearPage();
        mainDiv.appendChild(menu());
    });

    const contactBtn = document.querySelector('#contactBtn'); 
    contactBtn.addEventListener('click', () => {
        clearPage();
        mainDiv.appendChild(contact());
    });

    function clearPage() {
        mainDiv.innerHTML = "";
    }


})();
