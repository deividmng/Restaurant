import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import  './contact.js'; 

initialPageLoad();

let tabSwitchingModule = (function() {
    const homeTab = document.querySelector('#homeBtn'); 
    homeTab.addEventListener('click', initialPageLoad);

    const menuTab = document.querySelector('#menuBtn');
    menuTab.addEventListener('click', menu); 

    const contactTab = document.querySelector('#contactBtn'); 
    contactTab.addEventListener('click', contact); 
})();
