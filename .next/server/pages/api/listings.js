module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/listings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/listings.js":
/*!*******************************!*\
  !*** ./pages/api/listings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shuffle = __webpack_require__(/*! shuffle-array */ "shuffle-array");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const data = [{
  title: "2005 Ferrari F430 Convertible",
  description: "We are proud to offer one of the rarest modern-day Ferrari's in existence today.There are only approximately 130 RIGHT HAND DRIVE 6 SPEED GATED MANUAL F430 SPIDERS IN THE WORLD",
  imgUrl: "/img/ferrari01.webp",
  price: 299999,
  location: "Sydney, NSW"
}, {
  title: "2006 Ferrari F430 Spider Black 6 Speed Formula One Convertible",
  description: "Traralgon Car City is located in Victoria, 1.5 hrs from Melbourne down the South Eastern freeway. We are the largest non-franchise dealership in the Gippsland Region, locally owned and operated for over 30 years. Our team have the knowledge and the expertise to help you find the right car to perfectly suit your needs.",
  imgUrl: "/img/ferrari02.webp",
  price: 249990,
  location: "Taralgon, VIC"
}, {
  title: "2000 Ferrari 360 Modena F1 Blue 6 Speed Seq Manual Auto-Clutch Coupe",
  description: "This Magnificent car is one for the collector, becoming harder to find in this condition this is definitely a rare car. It has always been serviced and maintained by Ferrari by its single owner and has undoubtedly been loved. It has its genuine",
  imgUrl: "/img/ferrari03.webp",
  price: 148888,
  location: "Perth, WA"
}, {
  title: "1979 Ferrari 308 GTB Red 5 Speed Manual Coupe",
  description: "1979 Australian Delivered Ferrari 308 GTB in the World Famous Rosso Corsa Red with Black Leather Trim - Matching Numbers 2.9L V8 Engine - Classic 5 Speed Manual Gated Transmission - Very low 40,817KMs",
  imgUrl: "/img/ferrari04.webp",
  price: 179990,
  location: "Hobart, TAS"
}, {
  title: "1997 Ferrari F355 GTS Manual Coupe",
  description: "For sales this beautiful rare F355 GTS 6 speed manual gearbox is in outstanding and perfect original condition, full Ferrari service history, only 1000km, done since last service, fully documented service history.",
  imgUrl: "/img/ferrari05.webp",
  price: 200000,
  location: "Sydney, NSW"
}, {
  title: "Ferrari spare parts",
  description: "Wanted to buy: spare parts for my Ferrari. Will travel to inspect",
  price: "Wanted",
  location: "Adelaide, SA"
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const artificialDelay = randomNumber(100, 3000);
  const requestWillArtificiallyFail = randomNumber(0, 11) === 10;
  return sleep(artificialDelay).then(() => {
    if (requestWillArtificiallyFail) {
      res.statusCode = 500;
      res.end();
    } else {
      const response = shuffle(data, {
        copy: true
      }).splice(0, randomNumber(0, 6));
      res.statusCode = 200;
      res.json(response);
    }
  });
});

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shuffle-array");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xpc3RpbmdzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNodWZmbGUtYXJyYXlcIiJdLCJuYW1lcyI6WyJzaHVmZmxlIiwicmVxdWlyZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJwcmljZSIsImxvY2F0aW9uIiwicmVxIiwicmVzIiwiYXJ0aWZpY2lhbERlbGF5IiwicmVxdWVzdFdpbGxBcnRpZmljaWFsbHlGYWlsIiwidGhlbiIsInN0YXR1c0NvZGUiLCJlbmQiLCJyZXNwb25zZSIsImNvcHkiLCJzcGxpY2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFELENBQXJCOztBQUVBLFNBQVNDLEtBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNmLFNBQU8sSUFBSUMsT0FBSixDQUFZQyxPQUFPLElBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQWpDLENBQVA7QUFDSDs7QUFFRCxTQUFTSSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBK0I7QUFDM0IsUUFBTUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJILEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXhDO0FBQ0EsU0FBT0csSUFBSSxDQUFDRSxLQUFMLENBQVdILENBQVgsQ0FBUDtBQUNIOztBQUVELE1BQU1JLElBQUksR0FBRyxDQUNUO0FBQ0lDLE9BQUssRUFBRSwrQkFEWDtBQUVJQyxhQUFXLEVBQ1Asa0xBSFI7QUFJSUMsUUFBTSxFQUFFLHFCQUpaO0FBS0lDLE9BQUssRUFBRSxNQUxYO0FBTUlDLFVBQVEsRUFBRTtBQU5kLENBRFMsRUFTVDtBQUNJSixPQUFLLEVBQUUsZ0VBRFg7QUFFSUMsYUFBVyxFQUNQLGlVQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQVRTLEVBaUJUO0FBQ0lKLE9BQUssRUFDRCxzRUFGUjtBQUdJQyxhQUFXLEVBQ1Asc1BBSlI7QUFLSUMsUUFBTSxFQUFFLHFCQUxaO0FBTUlDLE9BQUssRUFBRSxNQU5YO0FBT0lDLFVBQVEsRUFBRTtBQVBkLENBakJTLEVBMEJUO0FBQ0lKLE9BQUssRUFBRSwrQ0FEWDtBQUVJQyxhQUFXLEVBQ1AsME1BSFI7QUFJSUMsUUFBTSxFQUFFLHFCQUpaO0FBS0lDLE9BQUssRUFBRSxNQUxYO0FBTUlDLFVBQVEsRUFBRTtBQU5kLENBMUJTLEVBa0NUO0FBQ0lKLE9BQUssRUFBRSxvQ0FEWDtBQUVJQyxhQUFXLEVBQ1AsdU5BSFI7QUFJSUMsUUFBTSxFQUFFLHFCQUpaO0FBS0lDLE9BQUssRUFBRSxNQUxYO0FBTUlDLFVBQVEsRUFBRTtBQU5kLENBbENTLEVBMENUO0FBQ0lKLE9BQUssRUFBRSxxQkFEWDtBQUVJQyxhQUFXLEVBQ1AsbUVBSFI7QUFJSUUsT0FBSyxFQUFFLFFBSlg7QUFLSUMsVUFBUSxFQUFFO0FBTGQsQ0ExQ1MsQ0FBYjtBQW1EZSxnRUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekIsUUFBTUMsZUFBZSxHQUFHZixZQUFZLENBQUMsR0FBRCxFQUFNLElBQU4sQ0FBcEM7QUFDQSxRQUFNZ0IsMkJBQTJCLEdBQUdoQixZQUFZLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBWixLQUF3QixFQUE1RDtBQUVBLFNBQU9MLEtBQUssQ0FBQ29CLGVBQUQsQ0FBTCxDQUF1QkUsSUFBdkIsQ0FBNEIsTUFBTTtBQUNyQyxRQUFJRCwyQkFBSixFQUFpQztBQUM3QkYsU0FBRyxDQUFDSSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FKLFNBQUcsQ0FBQ0ssR0FBSjtBQUNILEtBSEQsTUFHTztBQUNILFlBQU1DLFFBQVEsR0FBRzNCLE9BQU8sQ0FBQ2MsSUFBRCxFQUFPO0FBQUVjLFlBQUksRUFBRTtBQUFSLE9BQVAsQ0FBUCxDQUE4QkMsTUFBOUIsQ0FBcUMsQ0FBckMsRUFBd0N0QixZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBcEQsQ0FBakI7QUFDQWMsU0FBRyxDQUFDSSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FKLFNBQUcsQ0FBQ1MsSUFBSixDQUFTSCxRQUFUO0FBQ0g7QUFDSixHQVRNLENBQVA7QUFVSCxDQWRELEU7Ozs7Ozs7Ozs7O0FDOURBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS9saXN0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2xpc3RpbmdzLmpzXCIpO1xuIiwidmFyIHNodWZmbGUgPSByZXF1aXJlKFwic2h1ZmZsZS1hcnJheVwiKTtcblxuZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihtaW4sIG1heCl7XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyKTtcbn1cblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDUgRmVycmFyaSBGNDMwIENvbnZlcnRpYmxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJXZSBhcmUgcHJvdWQgdG8gb2ZmZXIgb25lIG9mIHRoZSByYXJlc3QgbW9kZXJuLWRheSBGZXJyYXJpJ3MgaW4gZXhpc3RlbmNlIHRvZGF5LlRoZXJlIGFyZSBvbmx5IGFwcHJveGltYXRlbHkgMTMwIFJJR0hUIEhBTkQgRFJJVkUgNiBTUEVFRCBHQVRFRCBNQU5VQUwgRjQzMCBTUElERVJTIElOIFRIRSBXT1JMRFwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDEud2VicFwiLFxuICAgICAgICBwcmljZTogMjk5OTk5LFxuICAgICAgICBsb2NhdGlvbjogXCJTeWRuZXksIE5TV1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA2IEZlcnJhcmkgRjQzMCBTcGlkZXIgQmxhY2sgNiBTcGVlZCBGb3JtdWxhIE9uZSBDb252ZXJ0aWJsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVHJhcmFsZ29uIENhciBDaXR5IGlzIGxvY2F0ZWQgaW4gVmljdG9yaWEsIDEuNSBocnMgZnJvbSBNZWxib3VybmUgZG93biB0aGUgU291dGggRWFzdGVybiBmcmVld2F5LiBXZSBhcmUgdGhlIGxhcmdlc3Qgbm9uLWZyYW5jaGlzZSBkZWFsZXJzaGlwIGluIHRoZSBHaXBwc2xhbmQgUmVnaW9uLCBsb2NhbGx5IG93bmVkIGFuZCBvcGVyYXRlZCBmb3Igb3ZlciAzMCB5ZWFycy4gT3VyIHRlYW0gaGF2ZSB0aGUga25vd2xlZGdlIGFuZCB0aGUgZXhwZXJ0aXNlIHRvIGhlbHAgeW91IGZpbmQgdGhlIHJpZ2h0IGNhciB0byBwZXJmZWN0bHkgc3VpdCB5b3VyIG5lZWRzLlwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDIud2VicFwiLFxuICAgICAgICBwcmljZTogMjQ5OTkwLFxuICAgICAgICBsb2NhdGlvbjogXCJUYXJhbGdvbiwgVklDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgXCIyMDAwIEZlcnJhcmkgMzYwIE1vZGVuYSBGMSBCbHVlIDYgU3BlZWQgU2VxIE1hbnVhbCBBdXRvLUNsdXRjaCBDb3VwZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVGhpcyBNYWduaWZpY2VudCBjYXIgaXMgb25lIGZvciB0aGUgY29sbGVjdG9yLCBiZWNvbWluZyBoYXJkZXIgdG8gZmluZCBpbiB0aGlzIGNvbmRpdGlvbiB0aGlzIGlzIGRlZmluaXRlbHkgYSByYXJlIGNhci4gSXQgaGFzIGFsd2F5cyBiZWVuIHNlcnZpY2VkIGFuZCBtYWludGFpbmVkIGJ5IEZlcnJhcmkgYnkgaXRzIHNpbmdsZSBvd25lciBhbmQgaGFzIHVuZG91YnRlZGx5IGJlZW4gbG92ZWQuIEl0IGhhcyBpdHMgZ2VudWluZVwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDMud2VicFwiLFxuICAgICAgICBwcmljZTogMTQ4ODg4LFxuICAgICAgICBsb2NhdGlvbjogXCJQZXJ0aCwgV0FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMTk3OSBGZXJyYXJpIDMwOCBHVEIgUmVkIDUgU3BlZWQgTWFudWFsIENvdXBlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCIxOTc5IEF1c3RyYWxpYW4gRGVsaXZlcmVkIEZlcnJhcmkgMzA4IEdUQiBpbiB0aGUgV29ybGQgRmFtb3VzIFJvc3NvIENvcnNhIFJlZCB3aXRoIEJsYWNrIExlYXRoZXIgVHJpbSAtIE1hdGNoaW5nIE51bWJlcnMgMi45TCBWOCBFbmdpbmUgLSBDbGFzc2ljIDUgU3BlZWQgTWFudWFsIEdhdGVkIFRyYW5zbWlzc2lvbiAtIFZlcnkgbG93IDQwLDgxN0tNc1wiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDQud2VicFwiLFxuICAgICAgICBwcmljZTogMTc5OTkwLFxuICAgICAgICBsb2NhdGlvbjogXCJIb2JhcnQsIFRBU1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIxOTk3IEZlcnJhcmkgRjM1NSBHVFMgTWFudWFsIENvdXBlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJGb3Igc2FsZXMgdGhpcyBiZWF1dGlmdWwgcmFyZSBGMzU1IEdUUyA2IHNwZWVkIG1hbnVhbCBnZWFyYm94IGlzIGluIG91dHN0YW5kaW5nIGFuZCBwZXJmZWN0IG9yaWdpbmFsIGNvbmRpdGlvbiwgZnVsbCBGZXJyYXJpIHNlcnZpY2UgaGlzdG9yeSwgb25seSAxMDAwa20sIGRvbmUgc2luY2UgbGFzdCBzZXJ2aWNlLCBmdWxseSBkb2N1bWVudGVkIHNlcnZpY2UgaGlzdG9yeS5cIixcbiAgICAgICAgaW1nVXJsOiBcIi9pbWcvZmVycmFyaTA1LndlYnBcIixcbiAgICAgICAgcHJpY2U6IDIwMDAwMCxcbiAgICAgICAgbG9jYXRpb246IFwiU3lkbmV5LCBOU1dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmVycmFyaSBzcGFyZSBwYXJ0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiV2FudGVkIHRvIGJ1eTogc3BhcmUgcGFydHMgZm9yIG15IEZlcnJhcmkuIFdpbGwgdHJhdmVsIHRvIGluc3BlY3RcIixcbiAgICAgICAgcHJpY2U6IFwiV2FudGVkXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkFkZWxhaWRlLCBTQVwiLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBhcnRpZmljaWFsRGVsYXkgPSByYW5kb21OdW1iZXIoMTAwLCAzMDAwKTtcbiAgICBjb25zdCByZXF1ZXN0V2lsbEFydGlmaWNpYWxseUZhaWwgPSByYW5kb21OdW1iZXIoMCwgMTEpID09PSAxMDtcblxuICAgIHJldHVybiBzbGVlcChhcnRpZmljaWFsRGVsYXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdFdpbGxBcnRpZmljaWFsbHlGYWlsKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIHJlcy5lbmQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBzaHVmZmxlKGRhdGEsIHsgY29weTogdHJ1ZSB9KS5zcGxpY2UoMCwgcmFuZG9tTnVtYmVyKDAsIDYpKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICAgICAgcmVzLmpzb24ocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2h1ZmZsZS1hcnJheVwiKTsiXSwic291cmNlUm9vdCI6IiJ9