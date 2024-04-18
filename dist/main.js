/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    // Crear un contenedor de página\r\n    const pageContent = document.createElement(\"div\");\r\n    pageContent.classList.add(\"aboutPage\"); // Agregar la clase content\r\n  \r\n    // Crear un div para la imagen\r\n    const imageContainer = document.createElement(\"div\");\r\n    const topImage = document.createElement(\"img\");\r\n    topImage.classList.add(\"top-image\");\r\n    topImage.src = \"../assets/img/pizza-8319463_1280.jpg\";\r\n    topImage.alt = \"Image of restaurant\";\r\n    topImage.height = \"300\";\r\n    topImage.classList.add('imgHome');\r\n    imageContainer.appendChild(topImage);\r\n    pageContent.appendChild(imageContainer);\r\n  \r\n    // Crear un div para los textos\r\n    const textContainer = document.createElement(\"div\");\r\n  \r\n    // Crear y añadir un elemento de título\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"about us\";\r\n    heading.classList.add(\"h1About\");\r\n    textContainer.appendChild(heading);\r\n  \r\n    // Crear y añadir párrafos\r\n    const para1 = document.createElement(\"p\");\r\n    para1.textContent = \"We are a passionate team of chefs dedicated to providing you with the best dining experience.\";\r\n    para1.classList.add(\"class\");\r\n    textContainer.appendChild(para1);\r\n  \r\n    const para2 = document.createElement(\"p\");\r\n    para2.textContent = \"Our mission is to use fresh, high-quality ingredients to create delicious dishes that delight our customers.\";\r\n    textContainer.appendChild(para2);\r\n  \r\n    const para3 = document.createElement(\"p\");\r\n    para3.textContent = \"Come visit us and taste the difference!\";\r\n    textContainer.appendChild(para3);\r\n  \r\n    // Agregar el contenedor de textos al contenedor de página\r\n    pageContent.appendChild(textContainer);\r\n  \r\n    // Agregar el contenido de la página al contenedor principal\r\n    contentDiv.appendChild(pageContent);\r\n}\r\n\n\n//# sourceURL=webpack://restauran/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n    const contact = document.querySelector(\"#content\");\r\n    contact.innerHTML = ''; // Limpiar el contenido anterior si lo hay\r\n\r\n    // Crear un contenedor de página\r\n    const pageContent = document.createElement(\"div\");\r\n    pageContent.classList.add(\"contactPage\");\r\n\r\n    // Crear un formulario\r\n    const form = document.createElement(\"form\");\r\n\r\n    // Crear y añadir un elemento de título\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Contact Us\";\r\n    heading.classList.add(\"contact-heading\");\r\n    pageContent.appendChild(heading);\r\n\r\n    // Crear campos de entrada y etiquetas\r\n    const nameLabel = document.createElement(\"label\");\r\n    nameLabel.textContent = \"Name:\";\r\n    const nameInput = document.createElement(\"input\");\r\n    nameInput.setAttribute(\"type\", \"text\");\r\n\r\n    const emailLabel = document.createElement(\"label\");\r\n    emailLabel.textContent = \"Email:\";\r\n    const emailInput = document.createElement(\"input\");\r\n    emailInput.setAttribute(\"type\", \"email\");\r\n\r\n    const messageLabel = document.createElement(\"label\");\r\n    messageLabel.textContent = \"Message:\";\r\n    const messageInput = document.createElement(\"textarea\");\r\n\r\n    // Botón de enviar\r\n    const submitButton = document.createElement(\"button\");\r\n    submitButton.setAttribute(\"type\", \"submit\");\r\n    submitButton.textContent = \"Submit\";\r\n\r\n    // Agregar campos y botón al formulario\r\n    form.appendChild(nameLabel);\r\n    form.appendChild(nameInput);\r\n    form.appendChild(emailLabel);\r\n    form.appendChild(emailInput);\r\n    form.appendChild(messageLabel);\r\n    form.appendChild(messageInput);\r\n    form.appendChild(submitButton);\r\n\r\n    // Agregar formulario al contenido de la página\r\n    pageContent.appendChild(form);\r\n\r\n    // Agregar el contenido de la página al contenedor principal\r\n    contact.appendChild(pageContent);\r\n}\r\n\n\n//# sourceURL=webpack://restauran/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load.js */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n \r\n \r\n\r\n\r\n\r\n// Inicializar la página con el contenido inicial\r\n(0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\r\n\r\n// Definir el módulo de cambio de pestañas\r\nlet tabSwitchingModule = (function() {\r\n    const mainDiv = document.querySelector('#content');\r\n\r\n    const homeBtn = document.querySelector('#homeBtn'); \r\n    homeBtn.addEventListener(\"click\", () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)());\r\n    });\r\n\r\n    const menuBtn = document.querySelector('#menuBtn');\r\n    menuBtn.addEventListener(\"click\", () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)());\r\n    });\r\n\r\n\r\n    const contactBtn = document.querySelector('#contactBtn'); \r\n    contactBtn.addEventListener('click', () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)());\r\n    });\r\n\r\n    const aboutBtn = document.querySelector('#aboutBtn'); \r\n    aboutBtn.addEventListener('click', () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__.about)());\r\n    });\r\n\r\n    function clearPage() {\r\n        mainDiv.innerHTML = \"\";\r\n    }\r\n\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://restauran/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\nfunction initialPageLoad() {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  // Crear un contenedor de página\r\n  const pageContent = document.createElement(\"div\");\r\n  pageContent.classList.add(\"homePage\"); // Agregar la clase content\r\n\r\n  // Crear un div para la imagen\r\n  const imageContainer = document.createElement(\"div\");\r\n  const topImage = document.createElement(\"img\");\r\n  topImage.classList.add(\"top-image\");\r\n  topImage.src = \"../assets/img/pexels-malidate-van-784633.jpg\";\r\n  topImage.alt = \"Image of restaurant\";\r\n  topImage.height = \"300\";\r\n  topImage.classList.add('imgHome');\r\n  imageContainer.appendChild(topImage);\r\n  pageContent.appendChild(imageContainer);\r\n\r\n  // Crear un div para los textos\r\n  const textContainer = document.createElement(\"div\");\r\n\r\n  // Crear y añadir un elemento de título\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Welcome to our restaurant!\";\r\n  heading.classList.add(\"h1Home\");\r\n  textContainer.appendChild(heading);\r\n\r\n  // Crear y añadir párrafos\r\n  const para1 = document.createElement(\"p\");\r\n  para1.textContent = \"Paragraph 1\";\r\n  para1.classList.add(\"class\");\r\n  textContainer.appendChild(para1);\r\n\r\n  const para2 = document.createElement(\"p\");\r\n  para2.textContent = \"Paragraph 2\";\r\n  textContainer.appendChild(para2);\r\n\r\n  const para3 = document.createElement(\"p\");\r\n  para3.textContent =\r\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis saepe aspernatur quas cupiditate, distinctio porro nostrum est illo! Esse delectus veritatis reiciendis fugiat quaerat blanditiis, cum consequatur optio enim?\";\r\n  textContainer.appendChild(para3);\r\n\r\n  // Agregar el contenedor de textos al contenedor de página\r\n  pageContent.appendChild(textContainer);\r\n\r\n  // Agregar el contenido de la página al contenedor principal\r\n  contentDiv.appendChild(pageContent);\r\n}\r\n\n\n//# sourceURL=webpack://restauran/./src/initial-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n    const contentDiv2 = document.querySelector('#content');\r\n    contentDiv2.innerHTML = '';\r\n    \r\n    // Crear un contenedor de página\r\n    const menuContent = document.createElement('div');\r\n    menuContent.classList.add('menuContent');\r\n   \r\n    // Crear y añadir un elemento de título para starters\r\n    const startersHeading = document.createElement('h4');\r\n    startersHeading.textContent = 'Starters';\r\n    startersHeading.classList.add('heading');\r\n    menuContent.appendChild(startersHeading);\r\n\r\n    // Crear un contenedor para los precios de starters\r\n    const startersPrices = document.createElement(\"div\");\r\n    startersPrices.classList.add('items');\r\n\r\n    const starterItems = [\r\n        {\r\n          name: \"shrimp crudo\",\r\n          price: 10.99,\r\n          description: \"freshly caught shrimp, olive oil, garlic aioli, focaccia\",\r\n        },\r\n        {\r\n          name: \"chicken wings\",\r\n          price: 12.99,\r\n          description:\r\n            \"12 crispy wings that come in 3 sauces of your choice, or leave it up to the chef to decide\",\r\n        },\r\n      ];\r\n\r\n    // Iterar sobre el arreglo de items de starters\r\n    starterItems.forEach(item => {\r\n        const menuNamePriceDescription = document.createElement('div');\r\n        menuNamePriceDescription.classList.add(\"menuPriceDescription\");\r\n        \r\n        // Crear un div para el nombre y el precio\r\n        const namePriceDiv = document.createElement('div');\r\n        namePriceDiv.classList.add('name-price');\r\n\r\n        // Agregar el nombre al div namePriceDiv\r\n        const name = document.createElement('p');\r\n        name.textContent = item.name;\r\n        namePriceDiv.appendChild(name);\r\n        \r\n        // Agregar el precio al div namePriceDiv\r\n        const price = document.createElement('p');\r\n        price.textContent = `$${item.price.toFixed(2)}`;\r\n        namePriceDiv.appendChild(price);\r\n        \r\n        // Agregar namePriceDiv al contenedor de precio y nombre\r\n        menuNamePriceDescription.appendChild(namePriceDiv);\r\n        \r\n        // Crear un div para la descripción\r\n        const menuDescriptionDiv = document.createElement('div');\r\n        menuDescriptionDiv.classList.add('description'); // Agregar clase description al contenedor de descripción\r\n        \r\n        // Agregar la descripción al contenedor de descripción\r\n        const description = document.createElement('p');\r\n        description.textContent = item.description;\r\n        menuDescriptionDiv.appendChild(description);\r\n        \r\n        // Agregar el contenedor de descripción al contenedor de precio y nombre\r\n        menuNamePriceDescription.appendChild(menuDescriptionDiv);\r\n\r\n        // Añadir menuNamePriceDescription al contenedor de precios de starters\r\n        startersPrices.appendChild(menuNamePriceDescription);\r\n    });\r\n\r\n    // Añadir el contenedor de precios de starters al menú\r\n    menuContent.appendChild(startersPrices);\r\n  \r\n    // Crear y añadir un elemento de título para mains\r\n    const mainsHeading = document.createElement('h4');\r\n    mainsHeading.textContent = 'Mains';\r\n    mainsHeading.classList.add('heading');\r\n    menuContent.appendChild(mainsHeading);\r\n\r\n    // Crear un contenedor para los precios de mains\r\n    const mainsPrices = document.createElement(\"div\");\r\n    mainsPrices.classList.add('items');\r\n\r\n    const mainsItems = [\r\n        {\r\n          name: \"Salmon Fillet\",\r\n          price: 18.99,\r\n          description: \"Freshly caught salmon fillet with a side of seasonal vegetables and roasted potatoes.\",\r\n        },\r\n        {\r\n          name: \"Ribeye Steak\",\r\n          price: 24.99,\r\n          description:\r\n            \"10oz ribeye steak cooked to your preference, served with mashed potatoes and sautéed asparagus.\",\r\n        },\r\n      ];\r\n\r\n    // Iterar sobre el arreglo de items de mains\r\n    mainsItems.forEach(item => {\r\n        const menuNamePriceDescription = document.createElement('div');\r\n        menuNamePriceDescription.classList.add(\"menuPriceDescription\");\r\n        \r\n        // Crear un div para el nombre y el precio\r\n        const namePriceDiv = document.createElement('div');\r\n        namePriceDiv.classList.add('name-price');\r\n\r\n        // Agregar el nombre al div namePriceDiv\r\n        const name = document.createElement('p');\r\n        name.textContent = item.name;\r\n        namePriceDiv.appendChild(name);\r\n        \r\n        // Agregar el precio al div namePriceDiv\r\n        const price = document.createElement('p');\r\n        price.textContent = `$${item.price.toFixed(2)}`;\r\n        namePriceDiv.appendChild(price);\r\n        \r\n        // Agregar namePriceDiv al contenedor de precio y nombre\r\n        menuNamePriceDescription.appendChild(namePriceDiv);\r\n        \r\n        // Crear un div para la descripción\r\n        const menuDescriptionDiv = document.createElement('div');\r\n        menuDescriptionDiv.classList.add('description'); // Agregar clase description al contenedor de descripción\r\n        \r\n        // Agregar la descripción al contenedor de descripción\r\n        const description = document.createElement('p');\r\n        description.textContent = item.description;\r\n        menuDescriptionDiv.appendChild(description);\r\n        \r\n        // Agregar el contenedor de descripción al contenedor de precio y nombre\r\n        menuNamePriceDescription.appendChild(menuDescriptionDiv);\r\n\r\n        // Añadir menuNamePriceDescription al contenedor de precios de mains\r\n        mainsPrices.appendChild(menuNamePriceDescription);\r\n    });\r\n\r\n    // Añadir el contenedor de precios de mains al menú\r\n    menuContent.appendChild(mainsPrices);\r\n\r\n    // Crear y añadir un elemento de título para desserts\r\n    const dessertsHeading = document.createElement('h4');\r\n    dessertsHeading.textContent = 'Desserts';\r\n    dessertsHeading.classList.add('heading');\r\n    menuContent.appendChild(dessertsHeading);\r\n\r\n    // Crear un contenedor para los precios de desserts\r\n    const dessertsPrices = document.createElement(\"div\");\r\n    dessertsPrices.classList.add('items');\r\n\r\n    const dessertItems = [\r\n        {\r\n          name: \"Chocolate Lava Cake\",\r\n          price: 8.99,\r\n          description: \"Decadent chocolate lava cake served with vanilla ice cream and raspberry sauce.\",\r\n        },\r\n        {\r\n          name: \"New York Cheesecake\",\r\n          price: 7.99,\r\n          description:\r\n            \"Classic New York-style cheesecake topped with fresh berries and whipped cream.\",\r\n        },\r\n      ];\r\n\r\n    // Iterar sobre el arreglo de items de desserts\r\n    dessertItems.forEach(item => {\r\n        const menuNamePriceDescription = document.createElement('div');\r\n        menuNamePriceDescription.classList.add(\"menuPriceDescription\");\r\n        \r\n        // Crear un div para el nombre y el precio\r\n        const namePriceDiv = document.createElement('div');\r\n        namePriceDiv.classList.add('name-price');\r\n\r\n        // Agregar el nombre al div namePriceDiv\r\n        const name = document.createElement('p');\r\n        name.textContent = item.name;\r\n        namePriceDiv.appendChild(name);\r\n        \r\n        // Agregar el precio al div namePriceDiv\r\n        const price = document.createElement('p');\r\n        price.textContent = `$${item.price.toFixed(2)}`;\r\n        namePriceDiv.appendChild(price);\r\n        \r\n        // Agregar namePriceDiv al contenedor de precio y nombre\r\n        menuNamePriceDescription.appendChild(namePriceDiv);\r\n        \r\n        // Crear un div para la descripción\r\n        const menuDescriptionDiv = document.createElement('div');\r\n        menuDescriptionDiv.classList.add('description'); // Agregar clase description al contenedor de descripción\r\n        \r\n        // Agregar la descripción al contenedor de descripción\r\n        const description = document.createElement('p');\r\n        description.textContent = item.description;\r\n        menuDescriptionDiv.appendChild(description);\r\n        \r\n        // Agregar el contenedor de descripción al contenedor de precio y nombre\r\n        menuNamePriceDescription.appendChild(menuDescriptionDiv);\r\n\r\n        // Añadir menuNamePriceDescription al contenedor de precios de desserts\r\n        dessertsPrices.appendChild(menuNamePriceDescription);\r\n    });\r\n\r\n    // Añadir el contenedor de precios de desserts al menú\r\n    menuContent.appendChild(dessertsPrices);\r\n    \r\n    // Reemplazar el contenido del contenedor principal\r\n    contentDiv2.innerHTML = '';\r\n    contentDiv2.appendChild(menuContent);\r\n}\r\n\n\n//# sourceURL=webpack://restauran/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;