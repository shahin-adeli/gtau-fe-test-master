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

  return '$ ' + price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

var Listing = function Listing(_ref) {
  var car = _ref.car;
  // TODO
  // This should be the component which renders an individual listing to the page
  var title = car.title,
      description = car.description,
      imgUrl = car.imgUrl,
      price = car.price,
      location = car.location;
  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "listing__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "price-location-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "listing__price text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, formatAsCurrency(price)), __jsx("p", {
    className: "listing__location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, location)), __jsx("div", {
    className: "listing__image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "listing__image",
    src: imgUrl,
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("p", {
    className: "listing__description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, description), __jsx("div", {
    className: "buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return console.log('View:', title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "view"), __jsx("button", {
    onClick: function onClick() {
      return console.log('Reply:', title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
      return _ref2.apply(this, arguments);
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
        lineNumber: 66,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, "Loading..."));
  }

  if (isError) {
    return __jsx("section", {
      className: "error",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
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
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "".concat(cars.length, " results ")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "for "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Ferrari "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "in "), __jsx("span", {
    className: "text-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Australia "))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, cars.length === 0 && __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 31
    }
  }, "Nothing was matched to your search ..."), cars.map(function (car, index) {
    return __jsx(Listing, {
      key: index,
      car: car,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwidXJsIiwiZm9ybWF0QXNDdXJyZW5jeSIsInByaWNlIiwidG9GaXhlZCIsInJlcGxhY2UiLCJMaXN0aW5nIiwiY2FyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIkxpc3RpbmdzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJjYXJzIiwic2V0Q2FycyIsImZldGNoQ2FycyIsImZldGNoIiwicmVwb25zZSIsImpzb24iLCJuZXdDYXJzIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEI7QUFFQSxJQUFNQyxHQUFHLEdBQUcsY0FBWjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQyxNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsV0FBT0EsS0FBUDtBQUNEOztBQUNELFNBQU8sT0FBT0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsT0FBakIsQ0FBeUIseUJBQXpCLEVBQW9ELEtBQXBELENBQWQ7QUFDRCxDQUxEOztBQU9BLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWE7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDM0I7QUFDQTtBQUVBLE1BQVFDLEtBQVIsR0FBd0RELEdBQXhELENBQVFDLEtBQVI7QUFBQSxNQUFlQyxXQUFmLEdBQXdERixHQUF4RCxDQUFlRSxXQUFmO0FBQUEsTUFBNEJDLE1BQTVCLEdBQXdESCxHQUF4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QUE7QUFBQSxLQUNHUixJQUFJLENBQUNRLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FEeEIsRUFFR1IsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ3ZCLEdBQUQsRUFBTXdCLEtBQU47QUFBQSxXQUNSLE1BQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUEsS0FBZDtBQUFxQixTQUFHLEVBQUV4QixHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFE7QUFBQSxHQUFULENBRkgsQ0FYRixDQURGO0FBb0JELENBckVEOztHQUFNTyxROztNQUFBQSxRO0FBdUVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMTg3NjhhM2E5YzQ4OTBiY2ZmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFDVElPTlMgPSBbJ1ZpZXcnLCAnUmVwbHknXTtcblxuY29uc3QgdXJsID0gJ2FwaS9saXN0aW5ncyc7XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAocHJpY2UpID0+IHtcbiAgaWYgKHR5cGVvZiBwcmljZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcHJpY2U7XG4gIH1cbiAgcmV0dXJuICckICcgKyBwcmljZS50b0ZpeGVkKDApLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxLCcpO1xufTtcblxuY29uc3QgTGlzdGluZyA9ICh7IGNhciB9KSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBzaG91bGQgYmUgdGhlIGNvbXBvbmVudCB3aGljaCByZW5kZXJzIGFuIGluZGl2aWR1YWwgbGlzdGluZyB0byB0aGUgcGFnZVxuXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWdVcmwsIHByaWNlLCBsb2NhdGlvbiB9ID0gY2FyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmcnPlxuICAgICAgPGgzIGNsYXNzTmFtZT0nbGlzdGluZ19fdGl0bGUnPnt0aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlLWxvY2F0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2xpc3RpbmdfX3ByaWNlIHRleHQtYmx1ZSc+e2Zvcm1hdEFzQ3VycmVuY3kocHJpY2UpfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGlzdGluZ19fbG9jYXRpb24nPntsb2NhdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdfX2ltYWdlLWNvbnRhaW5lcic+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsaXN0aW5nX19pbWFnZScgc3JjPXtpbWdVcmx9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3NOYW1lPSdsaXN0aW5nX19kZXNjcmlwdGlvbic+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnVmlldzonLCB0aXRsZSl9PnZpZXc8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnUmVwbHk6JywgdGl0bGUpfT5yZXBseTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIGVuZHBvaW50IChwcm9wcy5kYXRhRW5kcG9pbnQpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2NhcnMsIHNldENhcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZldGNoQ2FycyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBjb25zdCBuZXdDYXJzID0gYXdhaXQgcmVwb25zZS5qc29uKCk7XG5cbiAgICAgIHNldENhcnMobmV3Q2Fycyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hDYXJzKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG4gIGlmIChpc0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZXJyb3InPlxuICAgICAgICA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi48L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cblxuICAvLyBpZiAoY2Fycy5sZW5ndGggPT09IDApIHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPHNlY3Rpb24+XG4gIC8vICAgICAgIDxoMT5Ob3RoaW5nIFdhcyBGb3VuZCAuLi48L2gxPlxuICAvLyAgICAgPC9zZWN0aW9uPlxuICAvLyAgICk7XG4gIC8vIH1cblxuICAvLyB0aGVuIHJlbmRlciB0aGUgcmVzdWx0IGFzIHNldCBvZiBsaXN0aW5ncyBhcyBwZXIgdGhlIGRlc2lnbiBtb2Nrc1xuICAvLyBjaGVjayBwcm9wcyBwYXNzZWQgaW4gZnJvbSBwYXJlbnQgZm9yIG90aGVyIHZhbHVlcyB0aGF0IHlvdSBtYXkgbmVlZCB0byB1c2VcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2hlYWRlcic+XG4gICAgICAgIDxoMj5TZWFyY2ggUmVzdWx0czwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ibHVlJz57YCR7Y2Fycy5sZW5ndGh9IHJlc3VsdHMgYH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+Zm9yIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmx1ZSc+RmVycmFyaSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+aW4gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ibHVlJz5BdXN0cmFsaWEgPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19fZ3JpZCc+XG4gICAgICAgIHtjYXJzLmxlbmd0aCA9PT0gMCAmJiA8aDE+Tm90aGluZyB3YXMgbWF0Y2hlZCB0byB5b3VyIHNlYXJjaCAuLi48L2gxPn1cbiAgICAgICAge2NhcnMubWFwKChjYXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpc3Rpbmcga2V5PXtpbmRleH0gY2FyPXtjYXJ9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=