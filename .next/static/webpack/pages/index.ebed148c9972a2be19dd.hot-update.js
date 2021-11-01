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

var formatAsCurrency = function formatAsCurrency(price) {
  if (typeof price === 'string') {
    return price;
  }

  return '$ ' + parseInt(price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "listing__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "price-location-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "listing__price text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, formatAsCurrency(price)), __jsx("p", {
    className: "listing__location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, location)), __jsx("div", {
    className: "listing__image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "listing__image",
    src: imgUrl,
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("p", {
    className: "listing__description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, description), __jsx("div", {
    className: "buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return console.log('View:', title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "view"), __jsx("button", {
    onClick: function onClick() {
      return console.log('Reply:', title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 71,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, "Loading..."));
  }

  if (isError || !cars) {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, "Something went wrong, please try again later..."));
  } // if (cars.length === 0) {
  //   return (
  //     <section>
  //       <h1>Nothing Was Found ...</h1>
  //     </section>
  //   );
  // }
  // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use


  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "".concat(cars.length, " results ")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "for "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Ferrari "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "in "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "Australia "))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, cars.length === 0 && __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 31
    }
  }, "Nothing was found for your search ..."), cars.map(function (car, index) {
    return __jsx(Listing, {
      key: index,
      car: car,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwidXJsIiwiZm9ybWF0QXNDdXJyZW5jeSIsInByaWNlIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIkxpc3RpbmciLCJwcm9wcyIsImNhciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJMaXN0aW5ncyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImNhcnMiLCJzZXRDYXJzIiwiZmV0Y2hDYXJzIiwiZmV0Y2giLCJyZXBvbnNlIiwianNvbiIsIm5ld0NhcnMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQjtBQUVBLElBQU1DLEdBQUcsR0FBRyxjQUFaOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixXQUFPQSxLQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxPQUNBQyxRQUFRLENBQUNELEtBQUQsQ0FBUixDQUNHRSxPQURILENBQ1csQ0FEWCxFQUVHQyxPQUZILENBRVcseUJBRlgsRUFFc0MsS0FGdEMsQ0FGRjtBQU1ELENBVkQ7O0FBWUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCO0FBQ0E7QUFFQSxtQkFBd0RBLEtBQUssQ0FBQ0MsR0FBOUQ7QUFBQSxNQUFRQyxLQUFSLGNBQVFBLEtBQVI7QUFBQSxNQUFlQyxXQUFmLGNBQWVBLFdBQWY7QUFBQSxNQUE0QkMsTUFBNUIs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S0FBZ0IsQ0FBaEIsSUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FEeEIsRUFFR1IsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ3RCLEdBQUQsRUFBTXVCLEtBQU47QUFBQSxXQUNSLE1BQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUEsS0FBZDtBQUFxQixTQUFHLEVBQUV2QixHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFE7QUFBQSxHQUFULENBRkgsQ0FYRixDQURGO0FBb0JELENBckVEOztHQUFNTyxROztNQUFBQSxRO0FBdUVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYmVkMTQ4Yzk5NzJhMmJlMTlkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFDVElPTlMgPSBbJ1ZpZXcnLCAnUmVwbHknXTtcblxuY29uc3QgdXJsID0gJ2FwaS9saXN0aW5ncyc7XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAocHJpY2UpID0+IHtcbiAgaWYgKHR5cGVvZiBwcmljZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcHJpY2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAnJCAnICtcbiAgICBwYXJzZUludChwcmljZSlcbiAgICAgIC50b0ZpeGVkKDApXG4gICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJylcbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYW4gaW5kaXZpZHVhbCBsaXN0aW5nIHRvIHRoZSBwYWdlXG5cbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltZ1VybCwgcHJpY2UsIGxvY2F0aW9uIH0gPSBwcm9wcy5jYXI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZyc+XG4gICAgICA8aDMgY2xhc3NOYW1lPSdsaXN0aW5nX190aXRsZSc+e3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UtbG9jYXRpb24tY29udGFpbmVyJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nbGlzdGluZ19fcHJpY2UgdGV4dC1ibHVlJz57Zm9ybWF0QXNDdXJyZW5jeShwcmljZSl9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaXN0aW5nX19sb2NhdGlvbic+e2xvY2F0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ19faW1hZ2UtY29udGFpbmVyJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2xpc3RpbmdfX2ltYWdlJyBzcmM9e2ltZ1VybH0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzc05hbWU9J2xpc3RpbmdfX2Rlc2NyaXB0aW9uJz57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdWaWV3OicsIHRpdGxlKX0+dmlldzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdSZXBseTonLCB0aXRsZSl9PnJlcGx5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBjb21wb25lbnQgc2hvdWxkIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgZW5kcG9pbnQgKHByb3BzLmRhdGFFbmRwb2ludClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbY2Fycywgc2V0Q2Fyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZmV0Y2hDYXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IG5ld0NhcnMgPSBhd2FpdCByZXBvbnNlLmpzb24oKTtcblxuICAgICAgc2V0Q2FycyhuZXdDYXJzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENhcnMoKTtcbiAgfSwgW10pO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbiAgaWYgKGlzRXJyb3IgfHwgIWNhcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLjwvaDE+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxuXG4gIC8vIGlmIChjYXJzLmxlbmd0aCA9PT0gMCkge1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8c2VjdGlvbj5cbiAgLy8gICAgICAgPGgxPk5vdGhpbmcgV2FzIEZvdW5kIC4uLjwvaDE+XG4gIC8vICAgICA8L3NlY3Rpb24+XG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIC8vIHRoZW4gcmVuZGVyIHRoZSByZXN1bHQgYXMgc2V0IG9mIGxpc3RpbmdzIGFzIHBlciB0aGUgZGVzaWduIG1vY2tzXG4gIC8vIGNoZWNrIHByb3BzIHBhc3NlZCBpbiBmcm9tIHBhcmVudCBmb3Igb3RoZXIgdmFsdWVzIHRoYXQgeW91IG1heSBuZWVkIHRvIHVzZVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19faGVhZGVyJz5cbiAgICAgICAgPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJsdWUnPntgJHtjYXJzLmxlbmd0aH0gcmVzdWx0cyBgfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5mb3IgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ibHVlJz5GZXJyYXJpIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5pbiA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJsdWUnPkF1c3RyYWxpYSA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19ncmlkJz5cbiAgICAgICAge2NhcnMubGVuZ3RoID09PSAwICYmIDxoMT5Ob3RoaW5nIHdhcyBmb3VuZCBmb3IgeW91ciBzZWFyY2ggLi4uPC9oMT59XG4gICAgICAgIHtjYXJzLm1hcCgoY2FyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaXN0aW5nIGtleT17aW5kZXh9IGNhcj17Y2FyfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9