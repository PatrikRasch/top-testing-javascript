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

/***/ "./src/findShip.js":
/*!*************************!*\
  !*** ./src/findShip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findShip\": () => (/* binding */ findShip)\n/* harmony export */ });\nvar findShip = function findShip(shipArray, id) {\n  var ship = shipArray.find(function (element) {\n    return element.id === id;\n  });\n  return ship || false;\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/findShip.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\nvar gameboardFactory = function gameboardFactory(squares) {\n  var gameboardArray = Array.from({\n    length: squares * squares\n  }, function (_, index) {\n    var row = Math.floor(index / squares);\n    var column = index % squares + 1;\n    return {\n      coord: \"\".concat(row, \".\").concat(column),\n      containsShip: false\n    };\n  });\n  return gameboardArray;\n};\n\n\n// * If ship is placed on board, add key-value pair to board piece\n\n//# sourceURL=webpack://top-project-battleship/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\");\n/* harmony import */ var _shipHit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipHit.js */ \"./src/shipHit.js\");\n/* harmony import */ var _isSunk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSunk.js */ \"./src/isSunk.js\");\n/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboardFactory.js */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _receiveAttack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receiveAttack.js */ \"./src/receiveAttack.js\");\n/* harmony import */ var _findShip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./findShip.js */ \"./src/findShip.js\");\n\n\n\n\n\n\nvar gameboard1 = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_3__.gameboardFactory)(8);\nvar gameboard2 = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_3__.gameboardFactory)(8);\nvar ship1 = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(\"4.4\", \"vertical\", 3, 0, false);\nvar ship2 = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(\"2.2\", \"horizontal\", 3, 0, false);\nvar firstAttack = (0,_receiveAttack_js__WEBPACK_IMPORTED_MODULE_4__.receiveAttack)(gameboard1, \"2.2\");\nconsole.log(firstAttack);\n\n//# sourceURL=webpack://top-project-battleship/./src/gameplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay.js */ \"./src/gameplay.js\");\n\n// import { gameboardFactory } from \"./gameboardFactory\";\n// import { receiveAttack } from \"./receiveAttack\";\n\n// const gameboard = gameboardFactory(10);\n\n// const bro = receiveAttack(gameboard, \"1.1\");\n\n// console.log(bro);\n// console.log(gameplay);\n\n//# sourceURL=webpack://top-project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/isSunk.js":
/*!***********************!*\
  !*** ./src/isSunk.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isSunk\": () => (/* binding */ isSunk)\n/* harmony export */ });\nvar isSunk = function isSunk(ship) {\n  if (ship.hits === ship.length) {\n    ship.sunk = true;\n    return ship;\n  }\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/isSunk.js?");

/***/ }),

/***/ "./src/receiveAttack.js":
/*!******************************!*\
  !*** ./src/receiveAttack.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"receiveAttack\": () => (/* binding */ receiveAttack)\n/* harmony export */ });\nvar receiveAttack = function receiveAttack(gameboard, coord) {\n  var arrayItem = gameboard.find(function (element) {\n    return element.coord === coord;\n  }); // Finds the item that matches the hit coordinates\n  return arrayItem.containsShip; // Returns either false if no ship, or the ship's id\n};\n\n\n\n//# sourceURL=webpack://top-project-battleship/./src/receiveAttack.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipArray\": () => (/* binding */ shipArray),\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nvar shipArray = [];\nvar lastId = 1;\nvar shipFactory = function shipFactory(coord, orientation, length, hits, sunk) {\n  var ship = {\n    coord: coord,\n    orientation: orientation,\n    id: lastId++,\n    length: length,\n    hits: hits,\n    sunk: sunk\n  };\n  shipArray.push(ship);\n  return ship;\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/shipFactory.js?");

/***/ }),

/***/ "./src/shipHit.js":
/*!************************!*\
  !*** ./src/shipHit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipHit\": () => (/* binding */ shipHit)\n/* harmony export */ });\nvar shipHit = function shipHit(ship) {\n  ship.hits += 1;\n  return ship;\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/shipHit.js?");

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