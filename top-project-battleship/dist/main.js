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

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\nvar gameboardFactory = function gameboardFactory(squares) {\n  var gameboardArray = Array.from({\n    length: squares * squares\n  }, function (_, index) {\n    var row = Math.floor(index / squares);\n    var column = index % squares + 1;\n    return {\n      coord: \"\".concat(row, \".\").concat(column),\n      containsShip: false\n    };\n  });\n  return gameboardArray;\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _instances_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instances.js */ \"./src/instances.js\");\n/* harmony import */ var _placeShip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShip.js */ \"./src/placeShip.js\");\n// import { gameplay } from \"./gameplay.js\";\n\n\n(0,_placeShip_js__WEBPACK_IMPORTED_MODULE_1__.placeShip)(_instances_js__WEBPACK_IMPORTED_MODULE_0__.testShip, _instances_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFullShipHorizontal, \"1.1\", \"horizontal\");\n(0,_placeShip_js__WEBPACK_IMPORTED_MODULE_1__.placeShip)(_instances_js__WEBPACK_IMPORTED_MODULE_0__.testShip, _instances_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFullShipVertical, \"1.1\", \"vertical\");\n\n//# sourceURL=webpack://top-project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/instances.js":
/*!**************************!*\
  !*** ./src/instances.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardClean\": () => (/* binding */ gameboardClean),\n/* harmony export */   \"gameboardFullShipHorizontal\": () => (/* binding */ gameboardFullShipHorizontal),\n/* harmony export */   \"gameboardFullShipVertical\": () => (/* binding */ gameboardFullShipVertical),\n/* harmony export */   \"gameboardOneSquare\": () => (/* binding */ gameboardOneSquare),\n/* harmony export */   \"testShip\": () => (/* binding */ testShip),\n/* harmony export */   \"testShipOneFromSunk\": () => (/* binding */ testShipOneFromSunk)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/gameboardFactory.js\");\n\n\n\n// * testShip has a length of 3 and has taken 0 hits.\nvar testShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 0, false);\n\n// * testShipOneFromSunk has a length of 3 and has taken 2 hits already.\nvar testShipOneFromSunk = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 2, false);\n\n// * gameboardClean has no ships on it\nvar gameboardClean = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(8);\n\n// * gameboardOneSquare only has a 1x1 ship on it, on coord \"1.1\"\nvar gameboardOneSquare = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(8);\nvar gameboardElement = gameboardOneSquare.find(function (element) {\n  return element.coord === \"1.1\";\n});\ngameboardElement.containsShip = testShip.id;\n\n// * gameboardFullShipHorizontal has a 1x3 ship on it, on coord \"1.1\", \"1.2\" and \"1.3\"\nvar gameboardFullShipHorizontal = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(8);\n// Populate gameboard with testship's full length to test placeShip\nvar element1 = gameboardFullShipHorizontal.find(function (element) {\n  return element.coord === \"1.1\";\n});\nelement1.containsShip = testShip.id;\nvar element2 = gameboardFullShipHorizontal.find(function (element) {\n  return element.coord === \"1.2\";\n});\nelement2.containsShip = testShip.id;\nvar element3 = gameboardFullShipHorizontal.find(function (element) {\n  return element.coord === \"1.3\";\n});\nelement3.containsShip = testShip.id;\n\n// * gameboardFullShipVertical has a 1x3 ship on it, on coord \"1.1\", \"2.1\" and \"3.1\"\nvar gameboardFullShipVertical = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(8);\n// Populate gameboard with testship's full length to test placeShip\nvar element4 = gameboardFullShipVertical.find(function (element) {\n  return element.coord === \"1.1\";\n});\nelement4.containsShip = testShip.id;\nvar element5 = gameboardFullShipVertical.find(function (element) {\n  return element.coord === \"2.1\";\n});\nelement5.containsShip = testShip.id;\nvar element6 = gameboardFullShipVertical.find(function (element) {\n  return element.coord === \"3.1\";\n});\nelement6.containsShip = testShip.id;\n\n\n//# sourceURL=webpack://top-project-battleship/./src/instances.js?");

/***/ }),

/***/ "./src/placeShip.js":
/*!**************************!*\
  !*** ./src/placeShip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placeShip\": () => (/* binding */ placeShip)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar findElementToMark = function findElementToMark(gameboard, coord) {\n  return gameboard.find(function (element) {\n    return element.coord === coord;\n  });\n};\nvar placeShip = function placeShip(ship, gameboard, coord, orientation) {\n  if (orientation !== \"horizontal\" && orientation !== \"vertical\") {\n    return undefined; // If orientation error\n  }\n\n  var _coord$split$map = coord.split(\".\").map(Number),\n    _coord$split$map2 = _slicedToArray(_coord$split$map, 2),\n    startY = _coord$split$map2[0],\n    startX = _coord$split$map2[1]; // Make the coordinates into numbers in an array\n  var squaresToMark = ship.length; // Define how many squares are to be taken up by the ship\n  while (squaresToMark > 0) {\n    if (orientation === \"horizontal\") {\n      var coordinateToFindX = \"\".concat(startY, \".\").concat(startX + --squaresToMark);\n      var elementToMark = findElementToMark(gameboard, coordinateToFindX);\n      elementToMark.containsShip = ship.id;\n    }\n    if (orientation === \"vertical\") {\n      var coordinateToFindY = \"\".concat(startY + --squaresToMark, \".\").concat(startX);\n      var _elementToMark = findElementToMark(gameboard, coordinateToFindY);\n      _elementToMark.containsShip = ship.id;\n    }\n  }\n  return gameboard;\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/placeShip.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipArray\": () => (/* binding */ shipArray),\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nvar shipArray = [];\nvar lastId = 1;\nvar shipFactory = function shipFactory(length, hits, sunk) {\n  var ship = {\n    id: lastId++,\n    length: length,\n    hits: hits,\n    sunk: sunk,\n    coord: \"\",\n    orientation: \"\"\n  };\n  shipArray.push(ship);\n  return ship;\n};\n\n\n//# sourceURL=webpack://top-project-battleship/./src/shipFactory.js?");

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