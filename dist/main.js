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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n\r\n    const contentDiv = document.querySelector('#content');\r\n    contentDiv.innerHTML = '';\r\n    // Crear un contenedor de página\r\n    const pageContent = document.createElement('div');\r\n    // pageContent.classList.add('page-content');\r\n\r\n    // Crear y añadir un elemento de título\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Welcome to our restaurant!';\r\n    pageContent.appendChild(heading);\r\n\r\n    // Crear y añadir un elemento de imagen\r\n    // const topImage = document.createElement('img');\r\n    // topImage.classList.add('top-image');\r\n    // topImage.src = '../assets/img/pexels-malidate-van-784633.jpg';\r\n    // topImage.alt = 'Image of restaurant';\r\n    // topImage.height = '300';\r\n    // pageContent.appendChild(topImage);\r\n\r\n    // Crear y añadir párrafos\r\n    const para1 = document.createElement('p');\r\n    para1.textContent = 'Paragraph 1';\r\n    // para1.classList.add('class');\r\n    pageContent.appendChild(para1);\r\n    \r\n  \r\n    const para2 = document.createElement('p');\r\n    para2.textContent = 'Paragraph 2';\r\n    pageContent.appendChild(para2);\r\n\r\n    const para3 = document.createElement('p');\r\n    para3.textContent = 'Paragraph 3';\r\n    pageContent.appendChild(para3);\r\n\r\n    // Agregar el contenido de la página al contenedor principal\r\n    contentDiv.appendChild(pageContent);\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://restauran/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load.js */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n \r\n\r\n\r\n// Inicializar la página con el contenido inicial\r\n(0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\r\n\r\n// Definir el módulo de cambio de pestañas\r\nlet tabSwitchingModule = (function() {\r\n    const mainDiv = document.querySelector('#content');\r\n\r\n    const homeBtn = document.querySelector('#homeBtn'); \r\n    homeBtn.addEventListener(\"click\", () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)());\r\n    });\r\n\r\n    const menuBtn = document.querySelector('#menuBtn');\r\n    menuBtn.addEventListener(\"click\", () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)());\r\n    });\r\n\r\n    const contactBtn = document.querySelector('#contactBtn'); \r\n    contactBtn.addEventListener('click', () => {\r\n        clearPage();\r\n        mainDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)());\r\n    });\r\n\r\n    function clearPage() {\r\n        mainDiv.innerHTML = \"\";\r\n    }\r\n\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://restauran/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\nfunction initialPageLoad() {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  // Crear un contenedor de página\r\n  /// en este div quiero la img\r\n  const pageContent = document.createElement(\"div\");\r\n  // i en este el esto a ver como lo hacemos\r\n  const imagen = document.createElement(\"div\");\r\n\r\n  // Crear y añadir un elemento de título\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Welcome to our restaurant!\";\r\n  pageContent.appendChild(heading);\r\n  heading.classList.add(\"h1Home\");\r\n\r\n  // Crear y añadir un elemento de imagen\r\n  const topImage = document.createElement(\"img\");\r\n  topImage.classList.add(\"top-image\");\r\n  topImage.src = \"../assets/img/pexels-malidate-van-784633.jpg\";\r\n  topImage.alt = \"Image of restaurant\";\r\n  topImage.height = \"300\";\r\n  topImage.classList.add('imgHome')\r\n  imagen.appendChild(topImage);\r\n\r\n  // Crear y añadir párrafos\r\n  const para1 = document.createElement(\"p\");\r\n  para1.textContent = \"Paragraph 1\";\r\n  para1.classList.add(\"class\");\r\n  pageContent.appendChild(para1);\r\n\r\n  const para2 = document.createElement(\"p\");\r\n  para2.textContent = \"Paragraph 2\";\r\n  pageContent.appendChild(para2);\r\n\r\n  const para3 = document.createElement(\"p\");\r\n  para3.textContent =\r\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis saepe aspernatur quas cupiditate, distinctio porro nostrum est illo! Esse delectus veritatis reiciendis fugiat quaerat blanditiis, cum consequatur optio enim?\";\r\n  pageContent.appendChild(para3);\r\n\r\n  // Agregar el contenido de la página al contenedor principal\r\n  contentDiv.appendChild(imagen);\r\n  contentDiv.appendChild(pageContent);\r\n}\r\n\n\n//# sourceURL=webpack://restauran/./src/initial-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n// menu.js\r\nfunction menu() {\r\n  \r\n    const contentDiv = document.querySelector('#content');\r\n    contentDiv.innerHTML = '';\r\n    // Crear un contenedor de página\r\n    const pageContent = document.createElement('div');\r\n    // pageContent.classList.add('page-content');\r\n\r\n    // Crear y añadir un elemento de título\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Welcome to our restaurant!';\r\n    pageContent.appendChild(heading);\r\n\r\n    // Crear y añadir un elemento de imagen\r\n    // const topImage = document.createElement('img');\r\n    // topImage.classList.add('top-image');\r\n    // topImage.src = '../assets/img/pexels-malidate-van-784633.jpg';\r\n    // topImage.alt = 'Image of restaurant';\r\n    // topImage.height = '300';\r\n    // pageContent.appendChild(topImage);\r\n\r\n    // Crear y añadir párrafos\r\n    const para1 = document.createElement('p');\r\n    para1.textContent = 'Paragraph 1';\r\n    // para1.classList.add('class');\r\n    pageContent.appendChild(para1);\r\n    \r\n  \r\n    // const para2 = document.createElement('p');\r\n    // para2.textContent = 'Paragraph 2';\r\n    // pageContent.appendChild(para2);\r\n\r\n    // const para3 = document.createElement('p');\r\n    // para3.textContent = 'Paragraph 3';\r\n    // pageContent.appendChild(para3);\r\n\r\n    // Agregar el contenido de la página al contenedor principal\r\n    contentDiv.appendChild(pageContent);\r\n}\r\n\r\n// contact.js\r\n\n\n//# sourceURL=webpack://restauran/./src/menu.js?");

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