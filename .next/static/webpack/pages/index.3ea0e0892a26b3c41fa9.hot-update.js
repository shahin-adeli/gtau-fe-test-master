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
  return '$ ' + parseInt(_int).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "listing__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "price-location-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "listing__price text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, formatAsCurrency(price)), __jsx("p", {
    className: "listing__location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, location)), __jsx("img", {
    className: "listing__image",
    src: imgUrl,
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "listing__description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, description), __jsx("div", {
    className: "buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "view"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "reply")));
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
    }, "Loading..."));
  }

  if (isError || !cars) {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, "Something went wrong, please try again later..."));
  }

  if (cars.length === 0) {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, "Nothing Was Found ..."));
  } // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use


  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "".concat(cars.length, " results ")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "for "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Ferrari "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "in "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "Australia "))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, cars.map(function (car, index) {
    return __jsx(Listing, {
      key: index,
      car: car,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwidXJsIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsInBhcnNlSW50IiwidG9GaXhlZCIsInJlcGxhY2UiLCJMaXN0aW5nIiwicHJvcHMiLCJjYXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwicHJpY2UiLCJsb2NhdGlvbiIsIkxpc3RpbmdzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiY2FycyIsInNldENhcnMiLCJmZXRjaENhcnMiLCJmZXRjaCIsInJlcG9uc2UiLCJqc29uIiwibmV3Q2FycyIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCO0FBRUEsSUFBTUMsR0FBRyxHQUFHLGNBQVo7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVM7QUFDaEMsU0FDRSxPQUNBQyxRQUFRLENBQUNELElBQUQsQ0FBUixDQUNHRSxPQURILENBQ1csQ0FEWCxFQUVHQyxPQUZILENBRVcseUJBRlgsRUFFc0MsS0FGdEMsQ0FGRjtBQU1ELENBUEQ7O0FBU0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCO0FBQ0E7QUFFQSxtQkFBd0RBLEtBQUssQ0FBQ0MsR0FBOUQ7QUFBQSxNQUFRQyxLQUFSLGNBQVFBLEtBQVI7QUFBQSxNQUFlQyxXQUFmLGNBQWVBLFdBQWY7QUFBQSxNQUE0QkMsTUFBNUIsY0FBNEJBLE1BQTVCO0FBQUEsTUFBb0NDLEtBQXBDLGNBQW9DQSxLQUFwQztBQUFBLE1BQTJDQyxRQUEzQyxjQUEyQ0EsUUFB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UTtBQXNFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2VhMGUwODkyYTI2YjNjNDFmYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IHVybCA9ICdhcGkvbGlzdGluZ3MnO1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICByZXR1cm4gKFxuICAgICckICcgK1xuICAgIHBhcnNlSW50KGludClcbiAgICAgIC50b0ZpeGVkKDApXG4gICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJylcbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYW4gaW5kaXZpZHVhbCBsaXN0aW5nIHRvIHRoZSBwYWdlXG5cbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltZ1VybCwgcHJpY2UsIGxvY2F0aW9uIH0gPSBwcm9wcy5jYXI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZyc+XG4gICAgICA8aDMgY2xhc3NOYW1lPSdsaXN0aW5nX190aXRsZSc+e3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UtbG9jYXRpb24tY29udGFpbmVyJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nbGlzdGluZ19fcHJpY2UgdGV4dC1ibHVlJz57Zm9ybWF0QXNDdXJyZW5jeShwcmljZSl9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaXN0aW5nX19sb2NhdGlvbic+e2xvY2F0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0nbGlzdGluZ19faW1hZ2UnIHNyYz17aW1nVXJsfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPSdsaXN0aW5nX19kZXNjcmlwdGlvbic+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgPGJ1dHRvbj52aWV3PC9idXR0b24+XG4gICAgICAgIDxidXR0b24+cmVwbHk8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGlzdGluZ3MgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIGNvbXBvbmVudCBzaG91bGQgbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGFwaSBlbmRwb2ludCAocHJvcHMuZGF0YUVuZHBvaW50KVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtjYXJzLCBzZXRDYXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBmZXRjaENhcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgbmV3Q2FycyA9IGF3YWl0IHJlcG9uc2UuanNvbigpO1xuXG4gICAgICBzZXRDYXJzKG5ld0NhcnMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ2FycygpO1xuICB9LCBbXSk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxuICBpZiAoaXNFcnJvciB8fCAhY2Fycykge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uPC9oMT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGNhcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+Tm90aGluZyBXYXMgRm91bmQgLi4uPC9oMT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cbiAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgLy8gY2hlY2sgcHJvcHMgcGFzc2VkIGluIGZyb20gcGFyZW50IGZvciBvdGhlciB2YWx1ZXMgdGhhdCB5b3UgbWF5IG5lZWQgdG8gdXNlXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19oZWFkZXInPlxuICAgICAgICA8aDI+U2VhcmNoIFJlc3VsdHM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmx1ZSc+e2Ake2NhcnMubGVuZ3RofSByZXN1bHRzIGB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPmZvciA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJsdWUnPkZlcnJhcmkgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPmluIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmx1ZSc+QXVzdHJhbGlhIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2dyaWQnPlxuICAgICAgICB7Y2Fycy5tYXAoKGNhciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlzdGluZyBrZXk9e2luZGV4fSBjYXI9e2Nhcn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==