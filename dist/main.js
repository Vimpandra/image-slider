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

/***/ "./src/goNextSlide.js":
/*!****************************!*\
  !*** ./src/goNextSlide.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goNextSlide\": () => (/* binding */ goNextSlide)\n/* harmony export */ });\nfunction goNextSlide() {\n    const slide1 = document.getElementById('slide1');\n    const slide2 = document.getElementById('slide2');\n    const slide3 = document.getElementById('slide3');\n\n    const onDisplay = document.getElementById('onDisplay')\n\n    if (onDisplay.textContent === 'slide1') {\n        slide1.style.left = '-100vw';\n        slide2.style.left = '0';\n        slide3.style.left = '100vw';\n        onDisplay.textContent = 'slide2';\n    } else if (onDisplay.textContent === 'slide2') {\n        slide1.style.left = '-200vw';\n        slide2.style.left = '-100vw';\n        slide3.style.left = '0';\n        onDisplay.textContent = 'slide3';\n    } else if (onDisplay.textContent === 'slide3') {\n        slide1.style.left = '0';\n        slide2.style.left = '100vw';\n        slide3.style.left = '200vw';\n        onDisplay.textContent = 'slide1';\n    }\n}\n\n\n\n//# sourceURL=webpack://image-slider/./src/goNextSlide.js?");

/***/ }),

/***/ "./src/goPreviousSlide.js":
/*!********************************!*\
  !*** ./src/goPreviousSlide.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goPreviousSlide\": () => (/* binding */ goPreviousSlide)\n/* harmony export */ });\nfunction goPreviousSlide() {    \n    const slide1 = document.getElementById('slide1');\n    const slide2 = document.getElementById('slide2');\n    const slide3 = document.getElementById('slide3');\n    \n    const onDisplay = document.getElementById('onDisplay');\n    \n    if (onDisplay.textContent === 'slide1') {\n        slide1.style.left = '-200vw';\n        slide2.style.left = '-100vw';\n        slide3.style.left = '0';\n        onDisplay.textContent = 'slide3';\n    } else if (onDisplay.textContent === 'slide2') {\n        slide1.style.left = '0';\n        slide2.style.left = '100vw';\n        slide3.style.left = '200vw';\n        onDisplay.textContent = 'slide1';\n    } else if (onDisplay.textContent === 'slide3') {\n        slide1.style.left = '-100vw';\n        slide2.style.left = '0';\n        slide3.style.left = '100vw';\n        onDisplay.textContent = 'slide2';\n    }\n}\n\n\n\n//# sourceURL=webpack://image-slider/./src/goPreviousSlide.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _goNextSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goNextSlide */ \"./src/goNextSlide.js\");\n/* harmony import */ var _goPreviousSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goPreviousSlide */ \"./src/goPreviousSlide.js\");\n\n\n\nlet autoSliding = setInterval(_goNextSlide__WEBPACK_IMPORTED_MODULE_0__.goNextSlide, 5000);\n\nconst arrowLeft = document.getElementById('arrowLeft');\nconst arrowRight = document.getElementById('arrowRight');\n\narrowLeft.addEventListener('click', () => {\n    (0,_goPreviousSlide__WEBPACK_IMPORTED_MODULE_1__.goPreviousSlide)();\n    clearInterval(autoSliding);\n    autoSliding = setInterval(_goNextSlide__WEBPACK_IMPORTED_MODULE_0__.goNextSlide, 5000);\n});\n\narrowRight.addEventListener('click', () => {\n    (0,_goNextSlide__WEBPACK_IMPORTED_MODULE_0__.goNextSlide)();\n    clearInterval(autoSliding);\n    autoSliding = setInterval(_goNextSlide__WEBPACK_IMPORTED_MODULE_0__.goNextSlide, 5000);\n});\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

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