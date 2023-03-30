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

/***/ "./src/caesarCipher.js":
/*!*****************************!*\
  !*** ./src/caesarCipher.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"caesarCipher\": () => (/* binding */ caesarCipher)\n/* harmony export */ });\nconst caesarCipher = (str) => {\n  const shiftedCharArr = []; // Initialise array\n  const splitString = str.split(\"\"); // Split the argument into an array\n  splitString.forEach((char) => {\n    // Checks if the character is a regular character or a capital, then shifts it\n    if (isLowercaseLetter(char) || isUppercaseLetter(char)) {\n      let shiftedCharNum = char.charCodeAt() + 1; // Shifts character forwards by one step\n      if (shiftedCharNum === 123) shiftedCharNum = 97; // Wraps z back to a\n      if (shiftedCharNum === 91) shiftedCharNum = 65; // Wraps Z back to A\n      const shiftedChar = String.fromCharCode(shiftedCharNum);\n      shiftedCharArr.push(shiftedChar);\n      // If the character is a non-letter, it doesn't get shifted\n    } else {\n      shiftedCharArr.push(char);\n    }\n  });\n  return shiftedCharArr.join(\"\");\n};\n\nconst isLowercaseLetter = (char) => {\n  if (char.charCodeAt() < 123 && char.charCodeAt() > 96) return true;\n};\n\nconst isUppercaseLetter = (char) => {\n  if (char.charCodeAt() <= 90 && char.charCodeAt() >= 65) return true;\n};\n\ncaesarCipher(\"AnalkloEzZ! ouch !! :D\");\n\n\n\n\n//# sourceURL=webpack://top-project-testing-practice/./src/caesarCipher.js?");

/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"divide\": () => (/* binding */ divide),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"subtract\": () => (/* binding */ subtract)\n/* harmony export */ });\nconst add = (a, b) => {\n  return a + b;\n};\n\nconst subtract = (a, b) => {\n  return a - b;\n};\n\nconst divide = (a, b) => {\n  return a / b;\n};\n\nconst multiply = (a, b) => {\n  return a * b;\n};\n\n\n\n\n//# sourceURL=webpack://top-project-testing-practice/./src/calculator.js?");

/***/ }),

/***/ "./src/capitalize.js":
/*!***************************!*\
  !*** ./src/capitalize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize)\n/* harmony export */ });\nconst greetWorld = \"hello world\";\n\nconst capitalize = (str) => {\n  str = str.slice(0, 1).toUpperCase() + str.slice(1);\n  return str;\n};\n\ncapitalize(greetWorld);\n\n\n\n\n//# sourceURL=webpack://top-project-testing-practice/./src/capitalize.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.js */ \"./src/capitalize.js\");\n/* harmony import */ var _reverseString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverseString.js */ \"./src/reverseString.js\");\n/* harmony import */ var _calculator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator.js */ \"./src/calculator.js\");\n/* harmony import */ var _caesarCipher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caesarCipher.js */ \"./src/caesarCipher.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://top-project-testing-practice/./src/index.js?");

/***/ }),

/***/ "./src/reverseString.js":
/*!******************************!*\
  !*** ./src/reverseString.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString)\n/* harmony export */ });\nconst greetWorld = \"hello world\";\n\nconst reverseString = (str) => {\n  const characters = str.split(\"\");\n  const reversedCharacters = characters.reverse();\n  const reversedStr = reversedCharacters.join(\"\");\n  return reversedStr;\n};\n\nreverseString(greetWorld);\n\n\n\n\n//# sourceURL=webpack://top-project-testing-practice/./src/reverseString.js?");

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