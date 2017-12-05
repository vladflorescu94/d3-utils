(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define("d3-utils", ["ramda"], factory);
	else if(typeof exports === 'object')
		exports["d3-utils"] = factory(require("ramda"));
	else
		root["d3-utils"] = factory(root["R"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);


const selectionOr = __WEBPACK_IMPORTED_MODULE_0_ramda__["curry"]((callback, selection) => {
  return __WEBPACK_IMPORTED_MODULE_0_ramda__["when"](sel => sel.empty(), callback, selection);
});
/* harmony export (immutable) */ __webpack_exports__["selectionOr"] = selectionOr;


const isPercentage = v => v.toString().indexOf('%') > -1;

const getMargin = (dim, margin) => {
  if (isPercentage(margin)) {
    return dim * (parseInt(margin, 10) / 100);
  }
  return parseInt(margin, 10);
};

const computeDimension = (dimension, marginX, marginY) => {
  return dimension - getMargin(dimension, marginX) - getMargin(dimension, marginY);
};

const initSvg = (container, { width, height, margin: argsMargin }) => {
  if (__WEBPACK_IMPORTED_MODULE_0_ramda__["isNil"](width)) throw new Error('Missing param: width');
  if (__WEBPACK_IMPORTED_MODULE_0_ramda__["isNil"](height)) throw new Error('Missing param: height');

  const margin = __WEBPACK_IMPORTED_MODULE_0_ramda__["merge"]({ top: 0, bottom: 0, left: 0, right: 0 }, argsMargin);

  const svg = selectionOr(() => {
    return container.append('svg').attr('pointer-events', 'visible');
  }, container.select('svg'));

  svg.attr('width', width).attr('height', height);

  const chartHeight = computeDimension(height, margin.top, margin.bottom);
  const chartWidth = computeDimension(width, margin.left, margin.right);

  const g = selectionOr(() => {
    return svg.append('g').attr('class', 'main');
  }, svg.select('g.main'));

  g.attr('width', chartWidth).attr('height', chartHeight).attr('transform', `translate(${getMargin(width, margin.left)}, ${getMargin(height, margin.top)})`);

  return { svg, g, chartWidth, chartHeight };
};
/* harmony export (immutable) */ __webpack_exports__["initSvg"] = initSvg;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});