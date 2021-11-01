webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\shaha\\Desktop\\gtau-fe-test-master\\components\\Listings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var ACTIONS = ['View', 'Reply'];
var url = 'api/listings';

var formatAsCurrency = function formatAsCurrency(_int) {
  if (_int) return '$ ' + _int.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

var Listing = function Listing(props) {
  // TODO
  // This should be the component which renders an individual listing to the page
  var _props$car = props.car,
      title = _props$car.title,
      description = _props$car.description,
      imgUrl = _props$car.imgUrl,
      price = _props$car.price,
      location = _props$car.location;
  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "listing__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "price-location-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "listing__price text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, formatAsCurrency(price)), __jsx("p", {
    className: "listing__location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, location)), __jsx("img", {
    className: "listing__image",
    src: imgUrl,
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "listing__description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, description), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "view"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "reply"));
};

_c = Listing;

var Listings = function Listings(props) {
  _s();

  // TODO
  // This component should make a request to the api endpoint (props.dataEndpoint)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isError = _useState2[0],
      setIsError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      cars = _useState3[0],
      setCars = _useState3[1];

  var fetchCars = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var reponse, newCars;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url);

            case 3:
              reponse = _context.sent;
              _context.next = 6;
              return reponse.json();

            case 6:
              newCars = _context.sent;
              setCars(newCars);
              setLoading(false);
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              setIsError(true);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function fetchCars() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchCars();
  }, []);

  if (loading) {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, "Loading..."));
  } else if (isError || !cars) {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }
    }, "Something went wrong, please try again later..."));
  } // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use


  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "".concat(cars.length, " results ")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "for "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Ferrari "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "in "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "Australia "))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, cars.map(function (car, index) {
    return __jsx(Listing, {
      key: index,
      car: car,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    });
  })));
};

_s(Listings, "h+DgYKMo0ItliBG29TwDN4I3Fc0=");

_c2 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2;

$RefreshReg$(_c, "Listing");
$RefreshReg$(_c2, "Listings");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwidXJsIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsInRvRml4ZWQiLCJyZXBsYWNlIiwiTGlzdGluZyIsInByb3BzIiwiY2FyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsInByaWNlIiwibG9jYXRpb24iLCJMaXN0aW5ncyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImNhcnMiLCJzZXRDYXJzIiwiZmV0Y2hDYXJzIiwiZmV0Y2giLCJyZXBvbnNlIiwianNvbiIsIm5ld0NhcnMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQjtBQUVBLElBQU1DLEdBQUcsR0FBRyxjQUFaOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFTO0FBQ2hDLE1BQUlBLElBQUosRUFDRSxPQUFPLE9BQU9BLElBQUcsQ0FBQ0MsT0FBSixDQUFZLENBQVosRUFBZUMsT0FBZixDQUF1Qix5QkFBdkIsRUFBa0QsS0FBbEQsQ0FBZDtBQUNILENBSEQ7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCO0FBQ0E7QUFFQSxtQkFBd0RBLEtBQUssQ0FBQ0MsR0FBOUQ7QUFBQSxNQUFRQyxLQUFSLGNBQVFBLEtBQVI7QUFBQSxNQUFlQyxXQUFmLGNBQWVBLFdBQWY7QUFBQSxNQUE0QkMsTUFBNUIsY0FBNEJBLE1BQTVCO0FBQUEsTUFBb0NDLEtBQXBDLGNBQW9DQSxLQUFwQztBQUFBLE1BQTJDQyxRQUEzQyxjQUEyQ0EsUUFBM0M7QUFFQSxT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LEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWdDQSxJQUFJLENBQUNRLE1BQXJDLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGLEVBS0U7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixDQUZGLENBREYsRUFXRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNyQixHQUFELEVBQU1zQixLQUFOO0FBQUEsV0FDUixNQUFDLE9BQUQ7QUFBUyxTQUFHLEVBQUVBLEtBQWQ7QUFBcUIsU0FBRyxFQUFFdEIsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURRO0FBQUEsR0FBVCxDQURILENBWEYsQ0FERjtBQW1CRCxDQTNERDs7R0FBTU0sUTs7TUFBQUEsUTtBQTZEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjhmYjMzODZjYzgyMzM1MWE0ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IHVybCA9ICdhcGkvbGlzdGluZ3MnO1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICBpZiAoaW50KVxuICAgIHJldHVybiAnJCAnICsgaW50LnRvRml4ZWQoMCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG59O1xuXG5jb25zdCBMaXN0aW5nID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBzaG91bGQgYmUgdGhlIGNvbXBvbmVudCB3aGljaCByZW5kZXJzIGFuIGluZGl2aWR1YWwgbGlzdGluZyB0byB0aGUgcGFnZVxuXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWdVcmwsIHByaWNlLCBsb2NhdGlvbiB9ID0gcHJvcHMuY2FyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmcnPlxuICAgICAgPGgzIGNsYXNzTmFtZT0nbGlzdGluZ19fdGl0bGUnPnt0aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlLWxvY2F0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2xpc3RpbmdfX3ByaWNlIHRleHQtYmx1ZSc+e2Zvcm1hdEFzQ3VycmVuY3kocHJpY2UpfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGlzdGluZ19fbG9jYXRpb24nPntsb2NhdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2xpc3RpbmdfX2ltYWdlJyBzcmM9e2ltZ1VybH0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nbGlzdGluZ19fZGVzY3JpcHRpb24nPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8YnV0dG9uPnZpZXc8L2J1dHRvbj5cbiAgICAgIDxidXR0b24+cmVwbHk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBjb21wb25lbnQgc2hvdWxkIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgZW5kcG9pbnQgKHByb3BzLmRhdGFFbmRwb2ludClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbY2Fycywgc2V0Q2Fyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZmV0Y2hDYXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IG5ld0NhcnMgPSBhd2FpdCByZXBvbnNlLmpzb24oKTtcblxuICAgICAgc2V0Q2FycyhuZXdDYXJzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENhcnMoKTtcbiAgfSwgW10pO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNFcnJvciB8fCAhY2Fycykge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uPC9oMT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cbiAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgLy8gY2hlY2sgcHJvcHMgcGFzc2VkIGluIGZyb20gcGFyZW50IGZvciBvdGhlciB2YWx1ZXMgdGhhdCB5b3UgbWF5IG5lZWQgdG8gdXNlXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19oZWFkZXInPlxuICAgICAgICA8aDI+U2VhcmNoIFJlc3VsdHM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmx1ZSc+e2Ake2NhcnMubGVuZ3RofSByZXN1bHRzIGB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPmZvciA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJsdWUnPkZlcnJhcmkgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPmluIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmx1ZSc+QXVzdHJhbGlhIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2dyaWQnPlxuICAgICAgICB7Y2Fycy5tYXAoKGNhciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlzdGluZyBrZXk9e2luZGV4fSBjYXI9e2Nhcn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==